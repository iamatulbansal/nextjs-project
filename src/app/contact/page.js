import React from "react";
import style from "./page.module.css";
import contact from "/public/contact.png";
import Image from "next/image";
import Button from "@/components/button/Button";


export const metadata = {
  title: "Contact us ",
  description: "This is description for contact us page",
};
const Page = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Let's Keep in Touch</h1>

      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image src={contact} className={style.image} alt="" fill={true}/>
        </div>
        <form className={style.form}>
          <input type='text' placeholder='Name' className={style.input} />
          <input type='email' placeholder='email' className={style.input} />
          <textarea
            type='text'
            placeholder='Message'
            rows='10'
            cols='30'
            className={style.textarea}
          />
          <Button url='/' text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Page;
