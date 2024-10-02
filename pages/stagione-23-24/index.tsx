import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import { getPostBySlugSeason23_24 } from "../../lib/api";
import PostPreview from "../../components/post-preview";

export default function Stagione2324({ activities }) {
  return (
    <Layout>
      <Head>
        <title>{`${SITE_NAME} - Attività`}</title>
      </Head>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="lg:px-8">
            {/* ATTIVITA' */}
            <div className="mx-auto px-4 mb-20">
              <h1 className="mt-4 text-3xl">Attività stagione 2023/24</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 mt-20">
                {activities.map((a) => (
                  <PostPreview
                    key={a.slug}
                    title={a.title}
                    coverImage={a.coverImage}
                    slug={a.slug}
                    excerpt={a.excerpt}
                    directory="stagione-23-24"
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
  const activities = getPostBySlugSeason23_24([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { activities },
  };
};
