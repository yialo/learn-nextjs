import Link from 'next/link';

import { MainLayout } from '../layouts/MainLayout';

import style from '../css/modules/404.module.scss';

export default function ErrorPage404() {
  return (
    <MainLayout>
      <h1 className={style.Heading}>Error 404</h1>
      <p>Please <Link href="/">go back</Link> to good place</p>
    </MainLayout>
  );
}
