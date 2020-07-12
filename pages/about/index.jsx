import { useCallback } from 'react';
import Router from 'next/router';

const useButtonClickHandler = (route) => useCallback(() => {
  Router.push(`/${route}`);
}, []);

export default function AboutPage() {
  const handleHomeButtonClick = useButtonClickHandler('');
  const handlePostsButtonClick = useButtonClickHandler('posts');

  return (
    <>
      <h1>About page</h1>
      <button type="button" onClick={handleHomeButtonClick}>Go home</button>
      <button type="button" onClick={handlePostsButtonClick}>Jump to posts</button>
    </>
  );
}
