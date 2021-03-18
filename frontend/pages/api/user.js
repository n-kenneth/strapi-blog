import withSession from "../../lib/session";
import request from "../../lib/request";
import { gql } from "graphql-request";

export default withSession(async (req, res) => {
  const userData = req.session.get("user");
  if (userData) {
    const query = gql`
      query($id: ID!) {
        user(id: $id) {
          id
          email
          username
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
      }
    `;
    const {
      jwt,
      user: { id },
    } = userData;
    const variables = { id };
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    const { user, error } = await request(query, variables, headers);
    if (!error) {
      res.json({
        isLoggedIn: true,
        ...user,
      });
    } else {
      res.json({
        isLoggedIn: false,
      });
    }
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
