import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import AttivitaPreview from "./attivita-preview";
import { getAllActivities } from "../../lib/api";

export default function Attivita({ allActivities: activities }) {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Attività`}</title>
      </Head>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            <div className="mx-auto px-4 mb-20">
              <h1 className="mt-4 text-3xl">Attività</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 mt-20">
                {activities.map((a) => (
                  <AttivitaPreview
                    key={a.slug}
                    title={a.title}
                    coverImage={a.coverImage}
                    date={a.date}
                    slug={a.slug}
                    excerpt={a.excerpt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allActivities = getAllActivities([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allActivities },
  };
};
