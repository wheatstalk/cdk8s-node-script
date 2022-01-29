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
