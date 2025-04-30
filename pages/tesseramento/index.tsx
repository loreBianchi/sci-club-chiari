import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME, IS_SEASON_OPEN } from "../../lib/constants";
import Container from "../../components/container";
import TesseramentoContent from "../../components/tesserramento-content";
import GaranzieMassimali from "../../components/garanzie-massimali";
import { ASSISTENZA, INFORTUNI, RESPONSABILITA_CIVILE } from "../../lib/table-data";

export default function Tesseramento() {
  return (
    <Layout hasStickyBanner={!IS_SEASON_OPEN}>
      <Head>
        <title>{`${SITE_NAME} - Tesseramento`}</title>
      </Head>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            <TesseramentoContent />
            <hr />
            <GaranzieMassimali infortuni={INFORTUNI} assistenza={ASSISTENZA} respCivileTerzi={RESPONSABILITA_CIVILE} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
