import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  return (
    <div className={style.mainContainer}>
      <Link href={`/blog/id`} className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Creative Images</h1>
          <p className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere pariatur similique ex magni aperiam nobis! Impedit sapiente odit odio esse?</p>
        </div>
      </Link>
      <Link href={`/blog/id`} className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Creative Images</h1>
          <p className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere pariatur similique ex magni aperiam nobis! Impedit sapiente odit odio esse?</p>
        </div>
      </Link>
      <Link href={`/blog/id`} className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Creative Images</h1>
          <p className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere pariatur similique ex magni aperiam nobis! Impedit sapiente odit odio esse?</p>
        </div>
      </Link>
    </div>
  );
};

export default Page;
