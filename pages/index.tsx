import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllActivities } from "../lib/api";
import Head from "next/head";
import { SITE_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
            <div className="home-title-container text-center">
              <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-blue-300 drop-shadow-lg mb-6 text-shadow-title">
                Sci Club Chiari
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-blue-400 drop-shadow-lg mb-8 text-shadow-title">
                La passione per la montagna
              </h2>
              <Link className="px-3 py-2 text-white bg-blue-500 border-2 border-blue-600 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg" href="/tesseramento">
                È aperto il tesseramento
              </Link>
            </div>
          </div>
          {nextActivities.length > 0 && (
            <MoreStories posts={nextActivities} title="Prossime uscite" />
          )}
          <div className="mb-16">
            <Link className="px-3 py-2 text-blue-600 border-2 border-blue-600 py-2 px-6 focus:outline-none hover:bg-blue-50 rounded text-lg" href="/attivita">
              Vedi tutte le attività
              <FaArrowRight className="inline ml-2" />
            </Link>
          </div>
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
