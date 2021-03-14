// import Card from "../Card";
import { usePosts } from "../../hooks";
import Card from "../Card";

export default function BlogList() {
  const { data, isLoading } = usePosts();
  if (isLoading) return <p>Loading</p>;
  return (
    // <div className="grid gap-4 grid-cols-2">
    <div className="flex flex-wrap items-stretch">
      {data.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
}
