import Link from 'next/link';

const LINKS = ['about', 'posts'];

const capitalize = (str) => str.replace(/^\w/, (match) => match.toUpperCase());

export function MainLayout({ children }) {
  return (
    <>
      <nav>
        <p>Navigation</p>
        <ul>
          {LINKS.map((link) => (
            <li key={link}>
              <Link href={`/${link}`}>
                <a>{capitalize(link)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}