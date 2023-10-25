"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      response.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <form onSubmit={handleRegister} className={style.form}>
          <input
            type='text'
            placeholder='Username'
            required
            defaultValue={"Atul Bansal"}
            className={style.input}
          />
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
            Register
          </button>
        </form>
        <Link href='/dashboard/login' className={style.link}>
          Login with an existing account
        </Link>
      </div>
    </div>
  );
};

export default Register;
