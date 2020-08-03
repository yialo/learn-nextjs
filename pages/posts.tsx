import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ICustomPost } from '../interfaces';
import { URL } from '../constants';

import { MainLayout } from '../layouts/MainLayout';

interface IProps {
  posts: ICustomPost[];
}

export default function PostsPage({ posts: serverPosts }: IProps) {
  const [inputValue, setInputValue] = useState('');
  const [controlState, setControlState] = useState({
    posts: serverPosts,
    loading: false,
  });

  useEffect(() => {
    setControlState((prev) => ({
      ...prev,
      loading: true,
    }));

    (async () => {
      const posts = await (await fetch(URL.POSTS)).json();
      setControlState({
        posts,
        loading: false,
      });
    })();
  }, []);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <MainLayout title="Posts page | NextJS">
        <h1>Posts</h1>
        <p>
          <label>Enter post number:</label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </p>
        <Link href={`/post/${inputValue}`}>
          <button type="button">Jump!</button>
        </Link>
        <hr />
        {controlState.loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {controlState.posts.map(({ id, title, body }) => (
              <li key={id}>
                <h2>
                  <Link href={'/post/[id]'} as={`/post/${id}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        )}
      </MainLayout>
      <style jsx>
        {`
          input {
            border: 1px solid #343434;
            padding: 8px;
            border-radius: 4px;
            font-size: 14px;
            color: #343434;
          }

          ul {
            list-style-type: none;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticProps() {
  const posts = await (await fetch(URL.POSTS)).json();

  return {
    props: {
      posts,
    },
  };
}
