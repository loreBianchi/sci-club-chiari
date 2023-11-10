import CoverImage from "./cover-image"

type AttivitaHeaderProps = {
  title: string
  coverImage: string
  date: string
}

const AttivitaHeader = ({ title, coverImage, date }: AttivitaHeaderProps) => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}

export default AttivitaHeader
