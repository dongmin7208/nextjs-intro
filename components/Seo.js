import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Park Movies</title>
    </Head>
  );
}
