import React, { useEffect, useState } from 'react'
import  Axios  from './Axios'
import requests from './request'


function Row(props) {
const [movies, setMovies] = useState([])
const img_base_url = 'https://image.tmdb.org/t/p/original'


useEffect(()=>{
  async function fetchData (){
    const response = await Axios.get(props.endPoint)
    console.log(response.data.results)
    setMovies(response.data.results)
  } 
  fetchData()
},[])



  return (
    <div className='row'>
        <h1>{props.heading}</h1>
        <div className={(props.big) ? 'moviesRow big': 'moviesRow'}>
          {
          movies.map((item,index)=>{
            return(
              
            <img key= {index} src={img_base_url+item.poster_path
            } title = {item.title || item.original_name
            }/>
           
            )
          })
          }
        </div>
    </div>
  )
}

export default Row