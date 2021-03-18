import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useUser from "../hooks/useUser";
import withSession from "../lib/session";

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get("user");
  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateUser } = useUser({
    redirecTo: "/",
    redirectIfFound: true,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      identifier: email,
      password: password,
      provider: "local",
    };

    try {
      await mutateUser(
        fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      console.log("An unexpected error happened:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <fieldset>
        <Input
          type="email"
          name="email"
          label="Username"
          value={email}
          handleChange={setEmail}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={setPassword}
        />
        <Button label="Login" type="submit" />
      </fieldset>
    </form>
  );
}
