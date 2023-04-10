import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import Typewriter from 'typewriter-effect'

const BannerSlider = () => {
    const data = [
        {
            id:1,
            image:'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            title: 'A Place for Your Grocery.',
            button: '*'

        },
        {
            id:2,
            image: 'https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            title: 'The Place That Fits Your Needs.',
            button: '*'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidestToShow: 1,
        slidestToScroll: 1
    };
  return (
    <div className='bannerSlider'>
        <Slider className='bannerSlider' {...settings}>
            {
                data.map(item => {
                    return (
                    
                        
                        <div className='imageContainer' key={item.id}>
                            <img src={item.image} alt='No Image' />
                            <div className='textContent'>
                                        {/* <h1><Typewriter
                                            onInit={(typewriter) => {
                                            typewriter.typeString(item.title)
                                            .callFunction(() => {
                                            console.log('String typed out!');
                                                })
                                                .pauseFor(200)
                                                .deleteAll()
                                                .callFunction(() => {
                                                    console.log('All strings were deleted');
                                                })
                                                
                                                .start();
                                            }}
                    /></h1> */}
                                       <h1><Typewriter
                                        options={{
                                            strings: (item.title),
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        /></h1>
                                {/* <h1 className='titleText'>{item.title}</h1> */}
                                <p>{item.description}</p>
                                <button>Shop More</button>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider