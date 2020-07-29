import Head from 'next/head';
import Link from 'next/link';

import style from './MainLayout.module.css';

const HOME_LINK = 'home';
const LINKS = [HOME_LINK, 'about', 'posts'];

const capitalize = (str) => str.replace(/^\w/, (match) => match.toUpperCase());

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <title>{title}</title>
        <meta name="keywords" content="javascript, react, nextjs" />
      </Head>

      <nav className={style.Menu}>
        <ul className={style.List}>
          {LINKS.map((link) => (
            <li key={link} className={style.Item}>
              <Link href={`/${link === HOME_LINK ? '' : link}`}>
                <a className={style.Link}>{capitalize(link)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className={style.Main}>{children}</main>
    </>
  );
}
