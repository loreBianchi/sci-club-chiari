import Head from 'next/head';
import Layout from '../../components/layout'
import { SITE_NAME } from '../../lib/constants';
import Navbar from '../../components/navbar';
import Container from '../../components/container';
import SciClubIntro from './sci-club-intro';
import SciClubContent from './sci-club-content';
import Privacy from './privacy';

export default function SciClub() {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Sci club`}</title>
      </Head>
      <Navbar />
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            <SciClubIntro />
            <SciClubContent />
            <Privacy />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
