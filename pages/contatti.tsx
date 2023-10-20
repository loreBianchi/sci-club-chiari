import Head from 'next/head';
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants';
import Navbar from '../components/navbar';
import Container from '../components/container';

export default function Contatti() {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Contatti`}</title>
      </Head>
      <Navbar />
      <Container>
        Contatti
      </Container>
    </Layout>
  );
}
