import { gql } from "graphql-request";
import withSession from "../../lib/session";
import request from "../../lib/request";

export default withSession(async (req, res) => {
  const data = await req.body;

  try {
    const mutation = gql`
      mutation($identifier: String!, $password: String!, $provider: String!) {
        login(
          input: {
            identifier: $identifier
            password: $password
            provider: $provider
          }
        ) {
          jwt
          user {
            id
            username
            email
          }
        }
      }
    `;
    const {
      login: { jwt, user },
    } = await request(mutation, data);
    const userDetails = { jwt, user: { ...user } };

    req.session.set("user", userDetails);
    await req.session.save();

    res.json(userDetails);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
