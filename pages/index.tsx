import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllActivities } from "../lib/api";
import Head from "next/head";
import { SITE_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Image from "next/image";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const nextActivities = allPosts.slice(0, 2);
  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} - Home Page`}</title>
        </Head>
        <Container>
          <div className="mb-8 md:mb-16 mt-4 relative">
            <Image
              src="/assets/home/cover-sciclub.jpg"
              alt="home page image"
              className="shadow-sm w-full"
              width={1300}
              height={630}
            />
            <div className="home-title-container">
              <h1 className="invisible md:visible md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-blue-300 drop-shadow-lg">
                Sci Club Chiari
              </h1>
              <h2 className="invisible md:visible md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-blue-400 drop-shadow-lg">
                La passione per la montagna
              </h2>
            </div>
          </div>
          {nextActivities.length > 0 && (
            <MoreStories posts={nextActivities} title="Prossime uscite" />
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllActivities([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
