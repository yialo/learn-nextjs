import Link from 'next/link';
import nodeFetch from 'node-fetch';
import { useState } from 'react';

import { URL } from '../constants';

import { MainLayout } from '../layouts/MainLayout';

export default function PostsPage({ posts }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
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
        <ul>
          {posts.map(({ id, title, body }) => (
            <li key={id}>
              <h2>
                <Link href={`/post/[id]`} as={`/post/${id}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <p>{body}</p>
            </li>
          ))}
        </ul>
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

export async function getServerSideProps(ctx) {
  const posts = await (await nodeFetch(URL.POSTS)).json();
  return {
    props: {
      posts,
    },
  };
}
