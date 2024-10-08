import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Layout from "../../components/layout";
import {
  getAllNews,
  getPostBySlug,
  newsDirectory,
} from "../../lib/api";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type AttivitaType from "../../interfaces/attivita";
import Loader from "../../components/loader";

type AttivitaPostProps = {
  attivita: AttivitaType;
};

export default function NewsPost({ attivita }: AttivitaPostProps) {
  const router = useRouter();
  const title = `${attivita.title} | ${SITE_NAME}`;
  if (!router.isFallback && !attivita?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
              </Head>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight md:leading-none mb-12 text-center">
                {attivita.title}
              </h1>
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
    ["title", "date", "slug", "content"],
    newsDirectory,
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
  const posts = getAllNews(["slug"]);

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
