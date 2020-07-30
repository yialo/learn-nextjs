import Link from 'next/link';
import { useRouter } from 'next/router';

import { MainLayout } from '../../layouts/MainLayout';

export default function Post({ post }) {
  const router = useRouter();
  const { id } = router.query;

  const { title, body } = post;

  return (
    <>
      <MainLayout title={`Post ${id} | NextJS App`}>
        <h1>{title}</h1>
        <p>{body}</p>
        <hr />
        <div className="link-container">
          <Link href="/posts">
            <a>Back to post list</a>
          </Link>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .link-container {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const post = await (await fetch(`http://localhost:3100/posts/${ctx.query.id}`)).json();

  return {
    props: {
      post,
    },
  };
}
