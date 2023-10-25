"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    return router?.push("/dashboard");
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  }
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <form onSubmit={handleLogin} className={style.form}>
          <input
            type='email'
            placeholder='Email'
            defaultValue={"atulbansal9@gmail.com"}
            required
            className={style.input}
          />
          <input
            type='password'
            placeholder='Password'
            defaultValue={"admin@123"}
            required
            className={style.input}
          />
          {error && <p>Something want Wrong</p>}
          <button type='submit' className={style.button}>
            Login
          </button>
        </form>
        <button onClick={() => signIn("google")} className={style.link}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
