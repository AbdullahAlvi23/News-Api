"use client"

import React from 'react'
import "../Style/Foother.css"

export default function page() {
    return (
        <>
         <div className="Foother-Container-01">
            <div className="Fother-Contant">
                <div className="cont">
                <h1 className='Fother-head-01'> Stay up to date with </h1>
                <h1 className='Fother-head-01'>our mailing list</h1>
                <p className='Fother-para-01'>join and be the first to get the latest update </p>
                <p className='Fother-para-01'>about crypto news</p>
                </div>
            </div>
            <div className="Foother-input">
            <div className="cont">
                <div className="inputtt">
                    
                    <input type="text" placeholder='Your Email Address'/>
                    <button>Subscribe</button>
                    </div>
                </div>
            </div>
            </div>  
            <div className="last-container">
                <div className="last-head">
                    <h1>Crypto News</h1>
                    <p>Iley Design, 2025 Alright Reserved</p>
                </div>
           <div className="last-links">
           <table className='LAST_links'>
           <tr>
                    <th>Bicoin News</th>
                    <th>Bicoin News</th>
                    <th>Bicoin News</th>
                </tr>
                <tr>
                    <td>Home</td>
                    <td>Terms & Condition</td>
                    <td>CryptoNews@gmail.com</td>
                </tr>
                <tr>
                    <td>Categories</td>
                    <td>About us</td>
                    <td>(343)-3034</td>
                </tr>
                <tr>
                    <td>Trending </td>
                    <td>Privacy Policy</td>
                    <td>Tegal,indonesia</td>
                </tr>
                <tr>
                    <td>Market Cup</td>
                    <td>Disclaimer</td>
                </tr>
            </table>
           </div>
            </div>
        </>
    )
}
