"use client"
import  { React,useState,useEffect } from 'react'
import "../Style/Video.css"
import axios from 'axios'
import Categories from "../Categories/page"
import Nav from "../Nav/page"


export default function page() {
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



    return (

        <>
                       {/* <Nav/>  */}

           <h1 className='Video-heading'>New Videos</h1>
           <div className="main-01010">
           {
                news.map((items)=>(
           <div className="video-container">
            
                    <div className="small-new-101">
                    <img src={items.urlToImage} alt="" />
                    <p>{items.description}</p>
                    </div>
                    <div className="small-new-202">
                    <img src={items.urlToImage} alt="" />
                    <p>{items.description}</p>
                    </div>
                    <div className="small-new-303">
                    <img src={items.urlToImage} alt="" />
                    <p>{items.description}</p>
                    </div>

                </div>    
            ))
        }
        </div>
                <Categories/>
                   </>
    )
}
