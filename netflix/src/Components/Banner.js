import React from 'react'
import { useState, useEffect } from 'react'
import Axios from './Axios'
import requests from './request'


function Banner() {
    const [data, setData] = useState('')
    const img_base_url = 'https://image.tmdb.org/t/p/original'

    useEffect(()=>{
        const fetchBanner = ()=>{
            Axios.get(requests.fetchNetflixOriginals)
            .then((res) =>{
                setData(res.data.results[Math.floor(Math.random()*res.data.results.length)])
            }).catch(err=>{
                console.log(err)
            })
        }
        fetchBanner()
    },[])
    
  return (
    <div className='banner' style={{backgroundImage: 'url('+img_base_url + data.backdrop_path+')'}}>
        <h1>{data.title||data.name||data.original_name}</h1>
        <div className='link'>
            <a href=''>Play</a>
            <a href=''>My List</a>
            <p>{data.overview?.substring(0,150)+'...'}</p>
            
        </div>
    </div>
  )
}

export default Banner