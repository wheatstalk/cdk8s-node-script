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
