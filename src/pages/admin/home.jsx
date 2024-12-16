import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx';
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'

const Home = () => {
  return (
    <div>
      <div className='home'>
        <Navbar/>
        <img src={hero_banner} alt="" classname='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt=""classname='caption-img'/ >
            <p> discover some innovative ideas and skills with us thanks for your feedback</p>
        </div>
      </div>
    </div>
  )
}

export default Home