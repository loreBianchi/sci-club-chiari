import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Layout from '../../components/layout'
import { getAllActivities, getActivitiesBySlug } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type AttivitaType from '../../interfaces/attivita'
import AttivitaHeader from './attivita-header'

type AttivitaPostProps = {
  attivita: AttivitaType
}

export default function AttivitaPost({ attivita }: AttivitaPostProps) {
  const router = useRouter()
  const title = `${attivita.title} | Next.js Blog Example with ${CMS_NAME}`
  if (!router.isFallback && !attivita?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
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
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const attivita = getActivitiesBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(attivita.content || '')

  return {
    props: {
      attivita: {
        ...attivita,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllActivities(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
