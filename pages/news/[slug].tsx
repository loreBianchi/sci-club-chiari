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
import Loader from "../../components/loader";

type NewsType = {
  title: string;
  date: string;
  slug: string;
  content: string;
}

interface NewsPostProps {
  news: NewsType;
}

interface Params {
  params: {
    slug: string;
  };
}

export default function NewsPost({ news }: NewsPostProps) {
  const router = useRouter();
  const title = `${news?.title} | ${SITE_NAME}`;
  if (!router.isFallback && !news?.slug) {
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
                {news.title}
              </h1>
              <PostBody content={news.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: Params) {
  const news = getPostBySlug(
    params.slug,
    ["title", "date", "slug", "content"],
    newsDirectory,
  );
  const content = await markdownToHtml(news.content || "");

  return {
    props: {
      news: {
        ...news,
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
