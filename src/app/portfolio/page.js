import React from "react";
import style from "./page.module.css";
import Link from "next/link";
const Page = () => {
  return (
    <div className={style.container}>
      <h1 className={style.selectTitle}>Choose a gallery</h1>
      <div className={style.items}>
        {/* item-1 */}
        <Link href='/portfolio/illustrations' className={style.item}>
          <span className={style.title}>illustrations</span>
        </Link>
        {/* item-2 */}
        <Link href='/portfolio/websites' className={style.item}>
          <span className={style.title}>websites</span>
        </Link>
        {/* item-3 */}
        <Link href='/portfolio/applications' className={style.item}>
          <span className={style.title}>applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
