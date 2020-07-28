import { useRouter } from 'next/router';

import { MainLayout } from '../../layouts/MainLayout';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MainLayout title={`Post ${id} | NextJS App`}>
        <h1>Post {id}</h1>
      </MainLayout>
    </>
  );
}
