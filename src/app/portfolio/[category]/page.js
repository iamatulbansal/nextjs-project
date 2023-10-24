import React from "react";
import style from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Page = ({ params }) => {
  console.log(params);
  return (
    <div className={style.container}>
      <h1 className={style.categoryTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            corporis quis cumque debitis. Qui, ut!
          </p>
          <Button url='#' text='See more' />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            fill={true}
            alt=''
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
          />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            corporis quis cumque debitis. Qui, ut!
          </p>
          <Button url='#' text='See more' />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            fill={true}
            alt=''
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
          />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            corporis quis cumque debitis. Qui, ut!
          </p>
          <Button url='#' text='See more' />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            fill={true}
            alt=''
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
          />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            corporis quis cumque debitis. Qui, ut!
          </p>
          <Button url='#' text='See more' />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            fill={true}
            alt=''
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
