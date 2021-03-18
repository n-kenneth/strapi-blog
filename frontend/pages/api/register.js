import withSession from "../../lib/session";
import request from "../../lib/request";
import { gql } from "graphql-request";

export default withSession(async (req, res) => {
  const data = await req.body;
  try {
    const mutation = gql`
      mutation($username: String!, $email: String!, $password: String!) {
        register(
          input: { username: $username, email: $email, password: $password }
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

    const { register, response } = await request(mutation, data);
    if (response?.errors) {
      res.status(400).json("Email or Username is already taken");
    } else {
      const { jwt, user } = register;
      const userDetails = { jwt, user: { ...user } };
      req.session.set("user", userDetails);
      await req.session.save();

      res.json(userDetails);
    }
  } catch (error) {
    console.log(error);
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
