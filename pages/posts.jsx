import Link from 'next/link';
import { useEffect, useState } from 'react';

import { MainLayout } from '../layouts/MainLayout';

export default function PostsPage() {
  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts]  = useState([]);

  useEffect(() => {
    (async () => {
      const json = await (await fetch('http://localhost:3100/posts')).json();
      setPosts(json);
      console.log(json);
    })();
  }, []);

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
        <pre>
          {JSON.stringify(posts, null, 2)}
        </pre>
        <ul>

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
        `}
      </style>
    </>
  );
}
