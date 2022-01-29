# CDK8S Node Script

Create one-off node scripts to run in your Kubernetes cluster.

## NodeScriptJob usage

**main.ts**

```ts
import { App, Chart } from 'cdk8s';
import { NodeScriptJob, Code } from '@wheatstalk/cdk8s-node-script';

const app = new App();
const chart = new Chart(app, 'my-chart');

new NodeScriptJob(chart, 'NodeScript', {
  code: Code.fromBundler({
    entrypoint: path.join(__dirname, 'main.job.ts'),
  }),
});

app.synth();
```

**main.job.ts**

```ts
import got from 'got';

interface ZenQuote {
  readonly q: string;
}

async function main() {
  const res = await got('https://zenquotes.io/api/random');
  const data: ZenQuote[] = JSON.parse(res.body);
  console.log(data[0].q);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
```

**Example output**
```
$ kubectl logs -l wheatstalk.cdk8s-node-script/job
You are never too old to set another goal or to dream a new dream.
```

## NodeScriptDeployment usage

**main.ts**

```ts
import { App, Chart } from 'cdk8s';
import { NodeScriptDeployment, Code } from '@wheatstalk/cdk8s-node-script';

const app = new App();
const chart = new Chart(app, 'my-chart');

new NodeScriptDeployment(chart, 'NodeScript', {
  code: Code.fromBundler({
    entrypoint: path.join(__dirname, 'main.deployment.ts'),
  }),
});

app.synth();
```

**main.deployment.ts**

```ts
import got from 'got';

interface ZenQuote {
  readonly q: string;
}

async function main() {
  // noinspection InfiniteLoopJS
  while (true) {
    const res = await got('https://zenquotes.io/api/random');
    const data: ZenQuote[] = JSON.parse(res.body);
    console.log(data[0].q);

    await new Promise(resolve => setTimeout(resolve, 10000));
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
```

**Example output**
```
$ kubectl logs -l wheatstalk.cdk8s-node-script/deployment -f
You can start changing our world for the better daily, no matter how small the action.
Nothing good ever comes of violence.
The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.
Life is the art of drawing sufficient conclusions from insufficient premises.
...
```

