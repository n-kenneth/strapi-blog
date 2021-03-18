import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useUser from "../hooks/useUser";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutateUser } = useUser({
    redirecTo: "/",
    redirectIfFound: true,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email,
      username,
      password,
    };

    try {
      await mutateUser(
        fetch("/api/register", {
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
      <h2>Sign up</h2>
      <fieldset>
        <Input
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={setEmail}
        />

        <Input
          type="username"
          name="username"
          label="Username"
          value={username}
          handleChange={setUsername}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={setPassword}
        />
        <Button label="Signup" type="submit" />
      </fieldset>
    </form>
  );
}
