import { useCallback } from 'react';
import Router from 'next/router';

import { URL } from '../../constants';

import { MainLayout } from '../../layouts/MainLayout';

const useButtonClickHandler = (route) => useCallback(() => {
  Router.push(`/${route}`);
}, []);

export default function AboutPage({ title }) {
  const handleHomeButtonClick = useButtonClickHandler('');
  const handlePostsButtonClick = useButtonClickHandler('posts');

  return (
    <MainLayout title="About page">
      <h1>{title}</h1>
      <button type="button" onClick={handleHomeButtonClick}>Go home</button>
      <button type="button" onClick={handlePostsButtonClick}>Jump to posts</button>
    </MainLayout>
  );
}

AboutPage.defaultProps = {
  title: 'About page',
};

export async function getServerSideProps() {
  const { title } = await (await fetch(URL.ABOUT)).json();

  return {
    props: {
      title,
    },
  };
}
