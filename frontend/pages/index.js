import Head from "next/head";
// import { QueryClient, useQuery } from "react-query";
// import { dehydrate } from "react-query/hydration";
import BlogList from "../components/BlogList";
// import { getAllPosts } from "../hooks";

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery("posts", getAllPosts);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default function Home() {
  return (
    <div className="container mx-auto">
      <BlogList />
    </div>
  );
}
