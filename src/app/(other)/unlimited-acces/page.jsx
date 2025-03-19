"use client"

import React from 'react'
import "../Style/unlimited.css"
import Recent from "../Recent-articles/page"

export default function page() {
    return (
        <>
            <h1 className='GEt-aCcess-head'>Get unlimited acces</h1>
            <h1 className='GEt-aCcess-head'>to everything</h1>
            <p className='GEt-aCcess-para' >Plans starting at less than $1/week</p>
            <p  className='GEt-aCcess-para' >Cancel anytime</p>

            <div className="Access-container">
                    <div className="Access-new-1">
                        <h2 className='Access-heading-02'>Bronze</h2>
                        <h3 className='Access-heading-03'>With ads</h3>
                        <h3 className='Access-heading-03'>Limited Devices</h3>
                        <h3 className='Access-heading-03'>Limited access</h3>
                        <h3 className='Access-heading-03'>Limited Bookmark</h3>
                        <p  className='GEt-aCcess-para' >Comment</p>
                        <h2 className='Access-heading-02'>$0</h2>
                        <p  className='GEt-aCcess-para' >/Month</p>
                        <button className='GEt-aCcess-btn'>Try it</button>



                    </div>
                    <div className="Access-new-2">
                    <h2 className='Access-heading-02'>Silver</h2>
                        <h3 className='Access-heading-03'>No ads</h3>
                        <h3 className='Access-heading-03'>Unlimited Devices</h3>
                        <h3 className='Access-heading-03'>Unlimited access</h3>
                        <h3 className='Access-heading-03'>Unlimited Bookmark</h3>
                        <p  className='GEt-aCcess-para' >Comment</p>
                        <h2 className='Access-heading-02'>$20</h2>
                        <p  className='GEt-aCcess-para' >/Month</p>
                        <button className='GEt-aCcess-btn'>Subscribe Now</button>




                    </div>
                    <div className="Access-new-3">
                    <h2 className='Access-heading-02'>Gold</h2>
                    <h3 className='Access-heading-03'>No ads</h3>
                        <h3 className='Access-heading-03'>Unlimited Devices</h3>
                        <h3 className='Access-heading-03'>Unlimited access</h3>
                        <h3 className='Access-heading-03'>Unlimited Bookmark</h3>
                        <p  className='GEt-aCcess-para' >Comment</p>
                        <h2 className='Access-heading-02'>$50</h2>
                        <p  className='GEt-aCcess-para' >/Year</p>
                        <button className='GEt-aCcess-btn'>Buy Now</button>




                    </div>

                </div>  
        <Recent/>
        </>
    )
}
