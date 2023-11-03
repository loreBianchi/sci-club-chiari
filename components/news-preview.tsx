import Link from "next/link"
import DateFormatter from "./date-formatter"

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const NewsPreview = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div className="border-zinc-200 border rounded-lg p-5">
      <div className="flex w-full items-center justify-between flex-row">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link
            as={`/news/${slug}`}
            href="/news/[slug]"
            className="hover:underline text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-4 bg-blue-500 text-white px-3 rounded">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default NewsPreview
