import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import TesseramentoContent from "./tesserramento-content";
import GaranzieMassimali from "./garanzie-massimali";
import { INFORTUNI } from "./table-data";

export default function Tesseramento() {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Tesseramento`}</title>
      </Head>
      <Navbar />
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            <TesseramentoContent />
            <hr />
            <GaranzieMassimali infortuni={INFORTUNI} assistenza={[]} respCivileTerzi={[]} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
