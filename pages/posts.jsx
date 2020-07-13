import { useCallback, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { MainLayout } from '../layouts/MainLayout';

export default function PostsPage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Posts page | NextJS</title>
      </Head>
      <MainLayout>
        <h1>Posts</h1>
        <p>
          <label>Enter post number:</label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </p>
        <Link href={`/post/${inputValue}`}>
          <button type="button">Jump!</button>
        </Link>
      </MainLayout>
    </>
  );
}
