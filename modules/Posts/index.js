import Link from 'next/link';

export default function Posts({ list = [] }) {
  return (
    <div>
      <ul>
        {list.map(({ slug, title, date }) => (
          <Link key={slug} href={`/posts/${slug}`}>
            <li>
              {title} - {date}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
