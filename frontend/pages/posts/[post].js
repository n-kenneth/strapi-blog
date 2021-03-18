import Article from "../../components/Article";
import slugify from "slugify";
import { getAllPosts, getPost } from "../../hooks/usePosts";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <Article {...post} />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        post: slugify(post.title),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.post.split("-").join(" "));
  return {
    props: {
      post,
    },
  };
}
