import Button from "@/components/button/Button";
import React from "react";
import Image from "next/image";
import style from "./page.module.css";




const Page = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' fill={true}  className={style.img}/>
        <div className={style.imgText}>
          <h1 className={style.imgTitle}>Digital Storytellers</h1>
          <h2 className={style.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.items}>
          <h1 className={style.title}>Who Are We?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            perspiciatis consequatur, tenetur libero repudiandae at reiciendis
            quis alias explicabo aspernatur quos asperiores voluptatum
            consequuntur natus pariatur neque nemo nobis exercitationem.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            perspiciatis consequatur, tenetur libero repudiandae at reiciendis
            quis alias explicabo aspernatur quos asperiores voluptatum
            consequuntur natus pariatur neque nemo nobis exercitationem. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            perspiciatis consequatur, tenetur libero repudiandae at reiciendis
            quis alias explicabo aspernatur quos asperiores voluptatum
            consequuntur natus pariatur neque nemo nobis exercitationem.
          </p>
        </div>
        <div className={style.items}>
          <h1 className={style.title}>What We Do?</h1>
          <p className={style.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            perferendis porro animi commodi fuga adipisci exercitationem impedit
            temporibus optio doloremque sapiente, voluptate amet reprehenderit
            dignissimos, expedita reiciendis, sequi aspernatur saepe!
          </p>
          <p>- Creative Website</p>
          <p>- Creative Website</p>
          <p>- Creative Website</p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  );
};

export default Page;
