"use client"
import React from 'react'
import "../Style/Nav.css"
import  Headers  from "../Header/page"
import Link from 'next/link'

export default function page() {
    return (
        <>
        <nav>
            <div className="nav-logo"> <h1>CryptNews</h1></div>
           <div className="nav-links">
           <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Categories">Categories</Link></li>
            <li><Link href="/Recent-articles">Trending</Link></li>
            <li><Link href="/New-Videos">Market Cup</Link></li>
            </ul>
           </div>
          <div className="nav-btns">
            <input type="text" placeholder='Serch Here'/>
            <button>Serch</button>
          </div>
            </nav>
            <Headers/>
        </>
    )
}
