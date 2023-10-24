import React from "react";
import style from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Page = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h1 className={style.title}>{data.title}</h1>
          <p className={style.desc}>
           {data.body}
          </p>
          <div className={style.author}>
            <Image
              src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
              alt=''
              width={40}
              height={40}
              className={style.avatar}
            />
            <span className={style.username}>Atul Bansal</span>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            fill={true}
            className={style.image}
          />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          odio excepturi dolor voluptates tempora! Eum sit, laudantium ipsa
          quisquam possimus explicabo, quis maiores praesentium, velit
          distinctio dolorem voluptas quos! Et repellendus aut dolore delectus
          incidunt perspiciatis natus libero mollitia voluptas obcaecati ducimus
          hic cupiditate, consequatur, sed quis nobis corrupti a sint ipsa. Hic
          ullam consectetur vel ut accusantium corrupti sequi nihil ducimus
          molestiae, rem id doloribus iste error, porro labore quas, praesentium
          ipsa numquam autem sint! Labore distinctio vero totam. Ut nostrum quam
          libero explicabo nemo, non corrupti suscipit! Illum, sequi facere
          <br />
          <br />
          exercitationem quaerat deserunt distinctio fuga, dolore perferendis
          repellendus omnis veniam maiores obcaecati quasi? Praesentium velit
          quod voluptate. Soluta fugiat laudantium quisquam ab optio!
          Repudiandae sit inventore ad doloribus vel, expedita cum natus nisi
          est dicta hic architecto vero aspernatur rem ducimus animi quasi?
          Deleniti voluptatem beatae atque, sapiente praesentium laboriosam
          tempore error accusantium maiores necessitatibus quam <br />
          <br />
          quibusdam dolorum magni cumque impedit doloremque iure, cupiditate
          exercitationem modi iste eveniet eos explicabo! Omnis ullam culpa
          fugit impedit ipsam dolores facilis, inventore asperiores assumenda
          suscipit iste magnam laudantium possimus officia eum modi reiciendis
          sint nobis obcaecati? Nostrum unde, voluptate distinctio doloribus
          magnam placeat cumque iure. Ducimus quos laborum dicta eligendi.
          Voluptas.
        </p>
      </div>
    </div>
  );
};

export default Page;
