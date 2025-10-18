import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  author?: Author;
  slug: string;
  directory?: string;
  linkDisabled?: boolean;
};

const PostPreview = ({
  title,
  coverImage,
  excerpt,
  author,
  slug,
  directory = "attivita",
  linkDisabled = false,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={linkDisabled ? undefined : slug} title={title} src={coverImage} directory={directory} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        {!linkDisabled ? (
          <span className="text-gray-500">{title}</span>
        ) : (
          <Link
            as={`/${directory}/${slug}`}
            href={`/${directory}/[slug]`}
            className="hover:underline"
          >
            {title}
          </Link>
        )}
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
};

export default PostPreview;
