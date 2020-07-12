import Link from 'next/link';

const LINKS = ['about', 'posts'];

const capitalize = (str) => str.replace(/^\w/, (match) => match.toUpperCase());

export default function IndexPage() {
  return (
    <>
      <h1>Hello Next.js</h1>
      <nav>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolor repellat alias porro? Doloribus, aut, id vero blanditiis incidunt inventore soluta ex reprehenderit numquam perspiciatis, magni omnis. Repellendus, ex officia.</p>
    </>
  );
}
