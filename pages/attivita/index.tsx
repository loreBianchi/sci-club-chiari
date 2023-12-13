import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import { getAllFutureActivities, getAllPastActivities } from "../../lib/api";
import PostPreview from "../../components/post-preview";

export default function Attivita({ allActivities: activities, pastActivities }) {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Attività`}</title>
      </Head>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            {/* ATTIVITA' FUTURE */}
            <div className="mx-auto px-4 mb-20">
              <h1 className="mt-4 text-3xl">Attività</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 mt-20">
                {activities.map((a) => (
                  <PostPreview
                    key={a.slug}
                    title={a.title}
                    coverImage={a.coverImage}
                    slug={a.slug}
                    excerpt={a.excerpt}
                  />
                ))}
              </div>
            </div>

            {/* ATTIVITA' PASSATE */}
            <div className="mx-auto px-4 mb-20">
              <h1 className="mt-4 text-3xl">Attività passate</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 mt-20">
                {pastActivities.map((a) => (
                  <PostPreview
                    key={a.slug}
                    title={a.title}
                    coverImage={a.coverImage}
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
  const allActivities = getAllFutureActivities([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const pastActivities = getAllPastActivities([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allActivities, pastActivities },
  };
};
