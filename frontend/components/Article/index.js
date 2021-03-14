import Image from "next/image";

export default function Post({
  title,
  author,
  createdAt,
  description,
  thumbnail,
}) {
  return (
    <article>
      <Image
        src={`http://localhost:1337${thumbnail.url}`}
        width={1280}
        height={750}
      />
      <h2>{title}</h2>
      <div>
        <span>{author.username}</span>
        <span>{createdAt}</span>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </article>
  );
}
