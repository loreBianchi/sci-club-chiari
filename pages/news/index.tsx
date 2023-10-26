import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Container from "../../components/container";

export default function News() {  
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - News`}</title>
      </Head>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            <div className="mx-auto px-4 mb-20">
              <h1 className="mt-4 text-3xl">News</h1>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
