import Head from 'next/head';

import { MainLayout } from '../layouts/MainLayout';

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts page | NextJS</title>
      </Head>
      <MainLayout>
        <h1>Posts</h1>
      </MainLayout>
    </>
  );
}
