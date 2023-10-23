import Head from 'next/head';
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants';
import Container from '../components/container';

export default function Attivita() {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Attività`}</title>
      </Head>
      <Container>
        attività
      </Container>
    </Layout>
  );
}
