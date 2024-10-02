import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Layout from "../../components/layout";
import {
  getPostBySlug,
  getPostBySlugSeason23_24,
  season23_24_Directory,
} from "../../lib/api";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type AttivitaType from "../../interfaces/attivita";
import AttivitaHeader from "../../components/attivita-header";
import Loader from "../../components/loader";

type PastSeasonPostProps = {
  attivita: AttivitaType;
};

export default function PastSeasonPost({ attivita }: PastSeasonPostProps) {
  const router = useRouter();
  const title = `${attivita?.title ?? ""} | ${SITE_NAME}`;
  if (!router.isFallback && !attivita?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout hasStickyBanner={false} bannerLink={attivita?.bannerLink}>
      <Container>
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={attivita.ogImage.url} />
              </Head>
              <AttivitaHeader
                title={attivita.title}
                coverImage={attivita.coverImage}
                date={attivita.date}
              />
              <PostBody content={attivita.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const attivita = getPostBySlug(
    params.slug,
    ["title", "date", "slug", "content", "ogImage", "coverImage", "bannerLink"],
    season23_24_Directory
  );
  const content = await markdownToHtml(attivita.content || "");

  return {
    props: {
      attivita: {
        ...attivita,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getPostBySlugSeason23_24(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
