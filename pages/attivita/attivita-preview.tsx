import Link from "next/link"
import DateFormatter from "../../components/date-formatter"
import AttivitaCoverImage from "./attivita-cover-image"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const AttivitaPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <AttivitaCoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/attivita/${slug}`}
          href="/attivita/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default AttivitaPreview
