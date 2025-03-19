"use client"

import React from 'react'
import "../Style/Categories.css"
import Unlimited from "../unlimited-acces/page"

export default function page() {
    return (
        <>
            <h1 className='Header-heading'>New Categories</h1>
     
            <table className='CAtegoriess'>
                <tr>
                    <td>Bicoin News</td>
                    <td>Altcoin News</td>
                    <td>Sponsored Newws</td>
                    <td>Cryptocurrency</td>
                </tr>
                <tr>
                    <td>Ethereum News</td>
                    <td>BLockchain News</td>
                    <td>Cryptonews Deals</td>
                    <td>Marketplace</td>
                </tr>
                <tr>
                    <td>NFTs News</td>
                    <td>Confirmation</td>
                    <td>Industry Talk</td>
                    <td>Trading Tools</td>
                </tr>
                <tr>
                    <td>DeFi News</td>
                    <td>Press Releases</td>
                    <td>Trading Talk</td>
                    <td>Security Tools</td>
                </tr>
            </table>
            <Unlimited/>
        </>
    )
}
