import Link from 'next/link';

import { MainLayout } from '../../layouts/MainLayout';

import { URL } from '../../constants';

export default function Post({ post }) {
  const { id, title, body } = post;

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

export async function getStaticPaths() {
  const posts = await (await fetch(URL.POSTS)).json();
  const paths = posts.map((post) => {
    console.log(post);

    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const post = await (await fetch(`${URL.POSTS}/${params.id}`)).json();

  return {
    props: {
      post,
    },
  };
}
