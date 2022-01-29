import * as crypto from 'crypto';
import * as os from 'os';
import * as path from 'path';
import { Construct } from 'constructs';
import * as execa from 'execa';
import * as fs from 'fs-extra';
import * as k8s from '../src/imports/k8s';

/**
 * Provides code for node scripts.
 */
export abstract class Code {
  /**
   * Creates code by bundling a user-provided script.
   */
  static fromBundler(options: BundlerOptions): Code {
    return new BundlerCode(options);
  }

  /**
   * Creates code from an inline script.
   */
  static fromInline(code: string): Code {
    return new InlineCode({
      code,
    });
  }

  /** @internal */
  abstract _bind(scope: Construct): CodeConfig;
}

/** @internal */
export interface CodeConfig {
  readonly assetHash: string;
  readonly volume: k8s.Volume;
}

export interface InlineCodeProps {
  readonly code: string;
}

class InlineCode extends Code {
  constructor(private readonly options: InlineCodeProps) {
    super();
  }

  _bind(scope: Construct): CodeConfig {
    const configMap = new k8s.KubeConfigMap(scope, 'Code', {
      data: {
        'index.js': this.options.code,
      },
    });

    const sha256 = crypto.createHash('sha256').update(this.options.code);

    return {
      assetHash: sha256.digest().toString('hex'),
      volume: {
        name: 'inline',
        configMap: {
          name: configMap.name,
        },
      },
    };
  }
}

/**
 * Bundling options.
 */
export interface BundlerOptions {
  /**
   * Entrypoint file.
   */
  readonly entrypoint: string;

  /**
   * Minify the code
   *
   * @default true
   */
  readonly minify?: boolean;

  /**
   * Path to the tsconfig file.
   *
   * @default - none provided
   */
  readonly tsconfigPath?: string;
}

class BundlerCode extends Code {
  constructor(private readonly options: BundlerOptions) {
    super();
  }

  _bind(scope: Construct): CodeConfig {
    const tmpDir = bundle(this.options);

    const assetHash = crypto.createHash('sha256');
    const dataEntries = fs.readdirSync(tmpDir).map(name => {
      const content = fs.readFileSync(path.join(tmpDir, name)).toString();
      assetHash.update(`${name}:${content}`);
      return [name, content];
    });

    const config = new k8s.KubeConfigMap(scope, 'Code', {
      data: Object.fromEntries(dataEntries),
    });

    return {
      assetHash: assetHash.digest().toString('hex'),
      volume: {
        name: 'bundled',
        configMap: {
          name: config.name,
        },
      },
    };
  }
}

function bundle(bundlerOptions: BundlerOptions) {
  console.log('Starting bundler', bundlerOptions);

  const options = Array<string>();
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bundle'));
  const outFile = path.join(tmpDir, 'index.js');

  if (bundlerOptions.tsconfigPath) {
    options.push(`--tsconfig=${bundlerOptions.tsconfigPath}`);
  }

  if (bundlerOptions.minify ?? true) {
    options.push('--minify');
  }

  const args = [
    ...options,
    '--bundle',
    '--target=node14',
    '--platform=node',
    `--outfile=${outFile}`,
    bundlerOptions.entrypoint,
  ];

  console.log(`> esbuild ${args.join(' ')}`);
  execa.sync('esbuild', args);

  return tmpDir;
}
