import Head from 'next/head';

import { __pageTitle } from 'config';

export default function HeadModule({ pageTitle = __pageTitle }) {
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}
