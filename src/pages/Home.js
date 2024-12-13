import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/poster.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Welcome Gamers</h1>
        <p>
          Explore all the games you love in one place
        </p>
        <Link to="/games">
        <button>Discover</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

//This page is created by Garvi Thakkar