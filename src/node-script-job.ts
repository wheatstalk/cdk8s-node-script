import { Construct } from 'constructs';
import { Code } from './code';
import * as k8s from './imports/k8s';
import { renderLabel } from './util';

export interface NodeScriptJobProps {
  /**
   * The code to run.
   */
  readonly code: Code;
}

/**
 * Creates a job using node script code.
 */
export class NodeScriptJob extends Construct {
  constructor(scope: Construct, id: string, props: NodeScriptJobProps) {
    super(scope, id);

    const image = 'wheatstalk/cdk8s-node-script:14';
    const codePath = '/script';
    const codeConfig = props.code._bind(this);

    new k8s.KubeJob(this, 'Job', {
      metadata: {
        annotations: {
          [renderLabel('asset-hash')]: codeConfig.assetHash,
        },
      },
      spec: {
        template: {
          metadata: {
            labels: {
              [renderLabel('job')]: 'true',
            },
          },
          spec: {
            restartPolicy: 'OnFailure',
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
