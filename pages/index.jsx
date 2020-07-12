import Head from 'next/head';

import { MainLayout } from '../layouts/MainLayout';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="keywords" content="javascript, react, nextjs" />
      </Head>
      <MainLayout>
        <h1>Hello Next.js</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolor repellat alias porro? Doloribus, aut, id vero blanditiis incidunt inventore soluta ex reprehenderit numquam perspiciatis, magni omnis. Repellendus, ex officia.</p>
      </MainLayout>
    </>
  );
}
