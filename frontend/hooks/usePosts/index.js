import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const getAllPosts = async () => {
  const query = gql`
    query {
      posts {
        id
        title
        description
        thumbnail {
          url
        }
        author {
          username
        }
      }
    }
  `;
  const { posts } = await request(API_ENDPOINT, query);
  return posts;
};

const getPost = async (title) => {
  const query = gql`
    query($title: String!) {
      posts(where: { title: $title }) {
        id
        title
        createdAt
        description
        thumbnail {
          url
        }
        author {
          username
        }
      }
    }
  `;
  const { posts } = await request(API_ENDPOINT, query, { title });
  return posts[0];
};

const usePosts = () => {
  return useQuery("posts", getAllPosts);
};

export { usePosts, getAllPosts, getPost };
