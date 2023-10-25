"use client";
import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  const { data: session, status } = useSession()
  const user = session?.user?.name
  const route = useRouter()

  return (
    <div className={style.container}>
      <Link href='/' className={style.logo}>
        Logo
      </Link>
      <div className={style.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link}>
            {link.title}
          </Link>
        ))}
        {user && <p><span>🟢</span> {user}</p>}
        {status === "loading" ? "Loading..." : status === "authenticated" ? <button onClick={() => signOut()} className={style.logout}>Logout</button> : <button onClick={() => route?.push("/dashboard/login")} className={style.logout}>Login</button>}

      </div>
    </div>
  );
};

export default Navbar;
