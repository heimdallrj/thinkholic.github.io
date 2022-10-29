import Head from 'modules/Head';
import Header from 'modules/Header';

export default function BlogLayout({ children }) {
  return (
    <div>
      <Head />
      <Header />
      <div>{children}</div>
    </div>
  );
}
