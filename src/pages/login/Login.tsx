import React, { useState } from "react";
import { LoginForm } from "./LoginForm";

function Login() {
  const [login, setLogin] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const submitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <label htmlFor="email">Email</label>
        <input name="email" onChange={(e) => setLogin({ ...login, email: e.target.value })} />

        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default Login;
