"use client";
import { signIn } from "next-auth/react";
import React from "react";
import style from "./page.module.css";

const Login = () => {
  return (
    <div className={style.container}>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
