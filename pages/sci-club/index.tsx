import Head from 'next/head';
import Layout from '../../components/layout'
import { SITE_NAME } from '../../lib/constants';
import Container from '../../components/container';
import SciClubIntro from './sci-club-intro';
import SciClubContent from './sci-club-content';
import Privacy from './privacy';
import Cookie from './cookie';

export default function SciClub() {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Sci club`}</title>
      </Head>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            <SciClubIntro />
            <SciClubContent />
            <Privacy />
            <Cookie />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
