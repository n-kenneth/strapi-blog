import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import tw from "twin.macro";
import styled from "@emotion/styled";
import moment from "moment";

const Card = styled.div`
  ${tw`shadow-lg mb-2 rounded-md`}
`;

const CardImage = styled.div`
  height: 250px;
  ${tw`relative w-full rounded-t-md overflow-hidden`}
`;

const CardTitle = styled.h3`
  ${tw`font-bold pt-2 pb-1 px-2 text-gray-900 text-2xl`}
`;

const CardAuthor = styled.p`
  ${tw`text-lg px-2 mb-2 text-gray-800`}
`;

const CardDate = styled.span`
  ${tw`text-gray-600 ml-0.5 text-xs`}
`;

const CardBody = styled.div`
  ${tw`px-2 py-3`}
  a {
    ${tw`text-blue-500 ml-0.5`}
  }
`;

export default function Article({
  title,
  description,
  thumbnail,
  createdAt,
  author,
}) {
  console.log();
  return (
    <Card>
      <Link href={`/posts/${slugify(title, "-")}`}>
        <a>
          <CardImage>
            <Image
              src={`http://localhost:1337${thumbnail.url}`}
              loading="lazy"
              layout="fill"
              objectFit="cover"
            />
          </CardImage>
          <CardTitle>{title}</CardTitle>
        </a>
      </Link>
      <CardAuthor>
        {author.username}
        <CardDate>{moment(createdAt).fromNow()}</CardDate>
      </CardAuthor>
      <CardBody>
        {description.substring(0, 300)}...
        <Link href={`/posts/${slugify(title, "-")}`}>Read more</Link>
      </CardBody>
    </Card>
  );
}
