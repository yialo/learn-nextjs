import { useCallback } from 'react';
import Router from 'next/router';

import { MainLayout } from '../../layouts/MainLayout';

const useButtonClickHandler = (route) => useCallback(() => {
  Router.push(`/${route}`);
}, []);

export default function AboutPage() {
  const handleHomeButtonClick = useButtonClickHandler('');
  const handlePostsButtonClick = useButtonClickHandler('posts');

  return (
    <MainLayout>
      <h1>About page</h1>
      <button type="button" onClick={handleHomeButtonClick}>Go home</button>
      <button type="button" onClick={handlePostsButtonClick}>Jump to posts</button>
    </MainLayout>
  );
}
