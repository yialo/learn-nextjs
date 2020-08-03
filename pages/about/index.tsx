import { GetServerSideProps } from 'next';

import { URL } from '../../constants';
import { useButtonClickHandler } from '../../hooks';
import { MainLayout } from '../../layouts/MainLayout';

interface IProps {
  title: string;
}

const AboutPage: React.FC<IProps> = ({ title }) => {
  const handleHomeButtonClick = useButtonClickHandler('');
  const handlePostsButtonClick = useButtonClickHandler('posts');

  return (
    <MainLayout title="About page">
      <h1>{title}</h1>
      <button type="button" onClick={handleHomeButtonClick}>Go home</button>
      <button type="button" onClick={handlePostsButtonClick}>Jump to posts</button>
    </MainLayout>
  );
};

AboutPage.defaultProps = {
  title: 'About page',
};

export default AboutPage;

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const { title } = await (await fetch(URL.ABOUT)).json();

  return {
    props: {
      title,
    },
  };
};
