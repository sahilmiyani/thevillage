import React from 'react'
import '../Category/HomeCategories.css'
import img1 from '../../Assets/watermelonPNG.png'
import img2 from '../../Assets/potatoPNG.png'
import img3 from '../../Assets/chipsPNG.png'
import img4 from '../../Assets/saucePNG.png'

const HomeCategories = () => {
  return (
    <div className='homeCategories'>
        <div className='homeContainer'><img src={img1} alt='Fruit'/><div className='content'><h1>Fruits</h1><span>Shop Fruits Now</span></div></div>
        <div className='homeContainer'><img src={img2} alt='Vegetable'/><div className='content'><h1>Vegetables</h1><span>Shop Vegetables Now</span></div></div>
        <div className='homeContainer'><img src={img3} alt='Chips'/><div className='content'><h1>Chips</h1><span>Shop Chips Now</span></div></div>
        <div className='homeContainer'><img src={img4} alt='Sauces'/><div className='content'><h1>Sauces</h1><span>Shop Sauces Now</span></div></div>
    </div>
  )
}

export default HomeCategories