import { GraphQLClient } from "graphql-request";

export default async function request(action, variables = {}, headers = {}) {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  console.log(action, variables);

  try {
    const graphQLClient = new GraphQLClient(endpoint, {
      headers,
    });

    const data = await graphQLClient.request(action, variables);
    return data;
  } catch (error) {
    console.log("errr", error);
    return error;
  }
}
