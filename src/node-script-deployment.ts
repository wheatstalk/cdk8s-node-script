import * as crypto from 'crypto';
import { Construct } from 'constructs';
import { Code } from './code';
import * as k8s from './imports/k8s';
import { renderLabel } from './util';

export interface NodeScriptDeploymentProps {
  /**
   * The code to run.
   */
  readonly code: Code;
}

/**
 * Creates a job using node script code.
 */
export class NodeScriptDeployment extends Construct {
  constructor(scope: Construct, id: string, props: NodeScriptDeploymentProps) {
    super(scope, id);

    const image = 'wheatstalk/cdk8s-node-script:14';
    const codePath = '/script';
    const codeConfig = props.code._bind(this);

    const labelName = renderLabel('deployment');
    const labelValue = crypto.createHash('sha256').update(this.node.path).digest().toString('hex').substring(0, 32);

    new k8s.KubeDeployment(this, 'Deployment', {
      metadata: {
        annotations: {
          [renderLabel('asset-hash')]: codeConfig.assetHash,
        },
      },
      spec: {
        selector: {
          matchLabels: {
            [labelName]: labelValue,
          },
        },
        template: {
          metadata: {
            labels: {
              [labelName]: labelValue,
            },
          },
          spec: {
            containers: [{
              name: 'script',
              image: image,
              workingDir: codePath,
              args: ['index.js'],
              volumeMounts: [{
                name: codeConfig.volume.name,
                mountPath: codePath,
              }],
            }],
            volumes: [codeConfig.volume],
          },
        },
      },
    });
  }
}
