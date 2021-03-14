import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function Article({ title, description, thumbnail, author }) {
  return (
    <Link href={`/posts/${slugify(title, "-")}`}>
      <a className="w-6/12 px-2">
        <div className="shadow-md rounded-xl p-5">
          <Image
            src={`http://localhost:1337${thumbnail.url}`}
            width={500}
            height={500}
            className="object-cover"
          />
          <h3 className="font-bold pt-4 pb-4 text-gray-900 text-4xl">
            {title}
          </h3>
          <p className="pb-2 pt-5 text-gray-900 text-sm italic">
            {author.username}
          </p>
          <p className="font-sans text-base leading-relaxed">{description}</p>
        </div>
      </a>
    </Link>
  );
}
