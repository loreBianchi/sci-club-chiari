import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import { getAllNews } from "../../lib/api";
import NewsPreview from "../../components/news-preview";

export default function News({ allNews: news }) {  
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
              <div className="grid grid-cols-1 gap-y-10 md:gap-y-20 mb-32 mt-20">
                {news.map((a) => (
                  <NewsPreview
                    key={a.slug}
                    title={a.title}
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
  const allNews = getAllNews([
    "title",
    "date",
    "slug",
    "excerpt",
  ]);

  return {
    props: { allNews },
  };
};
