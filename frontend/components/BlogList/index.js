import Card from "../Card";
import { usePosts } from "../../hooks";
import tw from "twin.macro";
import styled from "@emotion/styled";

const BlogListContainer = styled.div`
  ${tw`grid grid-cols-3 gap-4`}
`;

export default function BlogList() {
  const { data, isLoading } = usePosts();
  if (isLoading) return <p>Loading</p>;
  return (
    <BlogListContainer>
      {data.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </BlogListContainer>
  );
}
