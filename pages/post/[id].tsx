import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

import { ICustomPost } from '../../interfaces';
import { MainLayout } from '../../layouts/MainLayout';

import { URL } from '../../constants';

interface IProps {
  post: ICustomPost;
}

export default function Post({ post: serverPost }: IProps) {
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

interface IParam extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<IParam> = async () => {
  const posts = await (await fetch(URL.POSTS)).json();
  const paths = posts.map((post: ICustomPost) => ({ params: { id: String(post.id) } }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<IProps, IParam> = async ({ params }) => {
  if (params === undefined) {
    return {
      props: {
        post: null,
      }
    };
  }
  const post = await (await fetch(`${URL.POSTS}/${params.id}`)).json();

  return {
    props: {
      post,
    },
  };
}
