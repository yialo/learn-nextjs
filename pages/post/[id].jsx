import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { MainLayout } from '../../layouts/MainLayout';

import { URL } from '../../constants';

export default function Post({ post: serverPost }) {
  const [state, setState] = useState({
    post: serverPost,
    loading: false,
  });
  const router = useRouter();

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    (async () => {
      const updatedPost = await (await window.fetch(`${URL.POSTS}/${router.query.id}`)).json();
      setState({
        post: updatedPost,
        loading: false,
      });
    })();
  }, []);

  const { id, title, body } = state.post;

  return (
    <>
      <MainLayout title={`Post ${id} | NextJS App`}>
        {state.loading ? (
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
  const posts = await (await fetch(URL.POSTS)).json();
  const paths = posts.map((post) => ({ params: { id: String(post.id) } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await (await fetch(`${URL.POSTS}/${params.id}`)).json();

  return {
    props: {
      post,
    },
  };
}
