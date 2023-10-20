import Head from 'next/head';
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants';
import Navbar from '../components/navbar';
import Container from '../components/container';

export default function SciClub() {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Sci club`}</title>
      </Head>
      <Navbar />
      <Container>
        sci club chiari
      </Container>
    </Layout>
  );
}
