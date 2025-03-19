"use client"

import { React,useState,useEffect } from 'react'
import "../Style/Hero.css"
import axios from 'axios'
import Videos from "../New-Videos/page"

export default function 
page() {
        const [news,setnews]=useState([])
    
   const GetNewsAPI = () =>{
     try {
      axios
      .get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
      .then(res =>setnews(res.data.articles) )
      .catch(err => console.error(err)); 
     } catch (error) {
      console.log(error)
     }
    }
    
      useEffect(() => {
        GetNewsAPI()
    
      },[])
    
    console.log(news)
    return (
        <>
       
        <h1 className='Header-heading'> Recommended for you</h1>
        <div className="main-000">
        {
news.map((item)=>(


       
            <div className="containers-02">
                <div className="news-001">
                    <div className="newss">
                    <img src={item.urlToImage} alt="" />
                    <div className="Recom-data">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    </div>
                    </div>
                    <div className="newssss">
                    <img src={item.urlToImage} alt="" />
                    <div className="Recom-data">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    </div>
                    </div>
                </div>
                   
                    
                <div className="news-002">
                <h2>{item.publishedAt}</h2>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h2>{item.publishedAt}</h2>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>
            </div>
         ))    }
         </div>
            <Videos/>
        </>
    )
}
