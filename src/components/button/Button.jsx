'use client'
import React from 'react'
import style from './button.module.css'
import Link from 'next/link'
const Button = ({ url, text }) => {
    return (
        <Link href={url}>
            <button className={style.button}>{text}</button>
        </Link>
    )
}

export default Button