import React from "react";
import style from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

function getData(category) {
  const data = items[category];
  if (data) {
    return data;
  }
  return notFound();
}
const Page = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={style.container}>
      <h1 className={style.categoryTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
            <Button url='#' text='See more' />
          </div>
          <div className={style.imgContainer}>
            <Image
              className={style.img}
              fill={true}
              alt=''
              src={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
