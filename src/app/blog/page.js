"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/api/posts", { cache: "no-store" })
        .then((res) => res.json())
        .then((result) => setData(result))
        .catch((error) => console.log(error));
    }
    getData();
  }, []);
  return (
    <div className={style.mainContainer}>
      {data?.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className={style.container}
        >
          <div className={style.imageContainer}>
            <Image
              src={item.img}
              alt=''
              width={400}
              height={250}
              className={style.image}
            />
          </div>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
