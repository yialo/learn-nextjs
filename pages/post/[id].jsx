import Head from 'next/head';
import { useRouter } from 'next/router';

import { MainLayout } from '../../layouts/MainLayout';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Post {id}</title>
      </Head>
      <MainLayout>
        <h1>Post {id}</h1>
      </MainLayout>
    </>
  );
}
