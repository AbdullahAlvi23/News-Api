"use client"
import  { React,useState,useEffect } from 'react'
import "../Style/Header.css"
import axios from 'axios'
import Hero from "../Hero-Section/page"

export default function page() {
    const [news,setnews]=useState([])
    useEffect(() => {
      GetNewsAPI()
  
    },[])

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

    
     

    return (
        <>
       <div className="main-000" >  {
          news.map((items)=>(
            <div>
        <h1 className="Header-heading">Today Trending</h1>
 
        <div className="containers">
                <div className="news-1">
                  <img src={items.urlToImage} alt="" />
                  <p>{items.description}</p>
                </div>
                <div className="news-2">
                <img src={items.urlToImage} alt="" />
                <p>{items.description}</p>
                </div>
            </div>
            

      </div>
                
              ))
            } 
</div>

<div className="main-0001">
                            {
                              news.map((items)=>(

                                <div className="small-container">
                                <div className="small-new-1">
                                <img src={items.urlToImage} alt="" />
                                <p>{items.title}</p>
                                </div>
                                <div className="small-new-2">
                                <img src={items.urlToImage} alt="" />
                                <p>{items.title}</p>
                                </div>
                                <div className="small-new-3">
                                <img src={items.urlToImage} alt="" />
                                <p>{items.title}</p>
                                </div>
            
                            </div> 
                                                         ))
                                                        }
                                                        </div>
                         
                       
<Hero/>
</>        
        
    )     
}