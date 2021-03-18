import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({
  redirecTo = false,
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR("/api/user");

  useEffect(() => {
    if (!redirecTo || !user) return;

    if (
      (redirecTo && !redirectIfFound && !user?.isLoggedIn) ||
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirecTo);
    }
  }, [user, redirectIfFound, redirecTo]);

  const logout = async (data) => {
    try {
      await mutateUser(fetch("/api/logout"));
    } catch (error) {
      console.log(error);
    }
  };

  return { user, mutateUser, logout };

  // const [user, setUser] = useContext(UserContext);

  // const register = async (data) => {
  //   const mutation = gql`
  //     mutation($username: String!, $email: String!, $password: String!) {
  //       register(
  //         input: { username: $username, email: $email, password: $password }
  //       ) {
  //         jwt
  //         user {
  //           username
  //           email
  //         }
  //       }
  //     }
  //   `;
  //   const { register } = await request(API_ENDPOINT, mutation, data);
  //   return register;
  // };

  // const checkUser = () => {
  //   if (user) return;

  //   const query = gql`
  //     query {
  //       me {
  //         id
  //       }
  //     }
  //   `;
  //   const me = request(API_ENDPOINT, query, {
  //     Authorization: `Bearer ${user.jwt}`,
  //   });
  //   return me;
  // };

  // const useLogin = () => {
  //   const loginMutation = useMutation(login, {
  //     onSuccess: (data, variables, context) => {
  //       console.log(data);
  //       setUser(data);
  //     },
  //   });
  //   return loginMutation;
  // };

  // const logout = () => {
  //   Cookies.remove("user");
  //   setUser("");
  // };

  // const checkLoggedIn = async () => {
  //   const user = Cookies.get("user");
  //   if (user) {
  //     const data = JSON.parse(user);
  //     return data;
  //   }
  // };

  // const getUser = () => {
  //   return user;
  // };

  // return { useLogin, getUser, logout, checkLoggedIn, useRegister, checkUser };
}
