import * as path from 'path';
import { SelfCleanup } from '@wheatstalk/cdk8s-self-cleanup';
import { App, Chart } from 'cdk8s';
import { NodeScriptJob, Code, NodeScriptDeployment } from '../src';

const app = new App();
const chart = new Chart(app, 'my-chart');

const tsconfigPath = path.join(__dirname, '..', 'tsconfig.dev.json');
new NodeScriptJob(chart, 'NodeScriptJob', {
  code: Code.fromBundler({
    entrypoint: path.join(__dirname, 'main.integ.job.ts'),
    tsconfigPath,
  }),
});

new NodeScriptDeployment(chart, 'NodeScriptDeployment', {
  code: Code.fromBundler({
    entrypoint: path.join(__dirname, 'main.integ.deployment.ts'),
    tsconfigPath,
  }),
});

new SelfCleanup(chart, 'SelfCleanup');

app.synth();
