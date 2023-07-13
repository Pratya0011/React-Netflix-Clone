import React from 'react'
import Row from './Row'
import requests from './request';
import './netflix.css'
import Banner from './Banner'
import Header from './Header';

function Netflix() {
  return (
    <div className='netflix'>
      <Header/>
      
        <Banner/>
      

        <Row endPoint = {requests.fetchNetflixOriginals} heading = 'Netflix Original' big = {true}/>
        <Row endPoint = {requests.fetchTrending} heading = 'Trending'/>
        <Row endPoint = {requests.fetchTopRated} heading = 'Top Rated'/>
        <Row endPoint = {requests.fetchTopActionMovies} heading = 'Action Movies'/>
        <Row endPoint = {requests.fetchHorrorMovies} heading = 'Horror Movies'/>
        <Row endPoint = {requests.fetchComedyMovies} heading = 'Comedy Movies'/>
        <Row endPoint = {requests.fetchRomanceMovies} heading = 'Romantic Movies'/>
        <Row endPoint = {requests.fetchDocumentaries} heading = 'Documentries'/>
    </div>
  );
}

export default Netflix