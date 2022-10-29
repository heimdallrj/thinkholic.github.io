import MasterLayout from 'layouts/Master';
import Head from 'modules/Head';

import { HomeWrap } from 'styles/home.styled';

export default function HomeLayout({ children }) {
  return (
    <MasterLayout>
      <Head pageTitle='Indi, Software Engineer' />
      <HomeWrap>{children}</HomeWrap>
    </MasterLayout>
  );
}
