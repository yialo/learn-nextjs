import Head from 'next/head';
import Link from 'next/link';

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

      <nav>
        <ul>
          {LINKS.map((link) => (
            <li key={link}>
              <Link href={`/${link === HOME_LINK ? '' : link}`}>
                <a>{capitalize(link)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>

      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 90%;
          background-color: black;
        }

        nav > ul {
          display: flex;
          justify-content: space-evenly;
          margin-top: 0;
          margin-bottom: 0;
          height: 3rem;
          padding-left: 0;
          list-style-type: none;
        }

        nav > ul > li {
          display: flex;
          align-items: center;
          padding: 0.25rem 0.5rem;
        }

        nav > ul > li > a {
          text-decoration: none;
          color: white;
        }

        nav > ul > li > a:hover {
          text-decoration: underline;
        }

        main {
          margin-top: 4rem;
        }
      `}</style>
    </>
  );
}