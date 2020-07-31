import Link from 'next/link';
import { useRouter } from 'next/router';
import nodeFetch from 'node-fetch';
import { useEffect, useState } from 'react';

import { MainLayout } from '../../layouts/MainLayout';

import { URL } from '../../constants';

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    (async () => {
      const updatedPost = await (await window.fetch(`${URL.POSTS}/${router.query.id}`)).json();
      setPost(updatedPost);
      setLoading(false);
    })();
  }, []);

  const { id, title, body } = post;

  return (
    <>
      <MainLayout title={`Post ${id} | NextJS App`}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>{title}</h1>
            <p>{body}</p>
          </>
        )}
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
  const posts = await (await nodeFetch(URL.POSTS)).json();
  const paths = posts.map((post) => {
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
  const post = await (await nodeFetch(`${URL.POSTS}/${params.id}`)).json();

  return {
    props: {
      post,
    },
  };
}
