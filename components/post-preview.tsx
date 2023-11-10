import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  author?: Author
  slug: string
  directory?: string
}

const PostPreview = ({
  title,
  coverImage,
  excerpt,
  author,
  slug,
  directory = 'attivita',
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/${directory}/${slug}`}
          href={`/${directory}/[slug]`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}

export default PostPreview
