import Head from 'next/head';

import { __pageTitle, __pageDesc } from 'config';

export default function HeadModule({
  pageTitle = __pageTitle,
  pageDesc = __pageDesc,
}) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={pageDesc} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
