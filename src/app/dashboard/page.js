"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
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

  //new way TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  /////////Google auth/////////////////
  // console.log(session);
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    return router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();//we use this for mute data our page not refresh again and again
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };
  if (session.status === "authenticated") {
    return (
      <div className={style.container}>
        <div className={style.posts}>
          {isLoading
            ? "Loading post data..."
            : data?.map((post) => (
                <div className={style.post} key={post._id}>
                  <div className={style.imgContainer}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={style.postTitle}>{post.title}</h2>
                  <span className={style.delete}>X</span>
                </div>
              ))}
        </div>

        <form className={style.form} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className={style.input} />
          <input type='text' placeholder='Desc' className={style.input} />
          <input type='text' placeholder='Image' className={style.input} />
          <textarea
            type='text'
            className={style.textArea}
            placeholder='Content'
            cols={30}
            rows={10}
          />
          <button type='submit' className={style.button}>
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
