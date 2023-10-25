"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";
const Page = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!response.ok) {
  //       setError(true);
  //     }
  //     setData(await response.json());
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);
  // console.log(data);
  //Instead of this useEffect we can use SWR client-side data fetching useSwr hooks come from next.js swr library

  /////////Google auth/////////////////
  const session = useSession();
  console.log(session);

  //////////////////////////

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );
  // console.log(data);

  return <div>Dashboard</div>;
};

export default Page;
