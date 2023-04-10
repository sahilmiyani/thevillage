import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import BannerSlider from '../../Components/Banners/BannerSlider'
import HomeCategories from '../../Components/Category/HomeCategories'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <BannerSlider/>
    <HomeCategories/>
    </div>
  )
}

export default Home