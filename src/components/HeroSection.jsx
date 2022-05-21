import React from 'react'
import CustomImages from './CustomImages'

const HeroSection = () => {

    const images =[
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]

  return (
    <div className='section hero'>
      <div className="col typography">
          <h1 className="title">What Are We About</h1>
          <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse facilis ipsam? Voluptatum culpa, rem reiciendis unde reprehenderit repellendus officia facere harum quos officiis ipsum illum doloremque voluptas nihil iure!</p>
          <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
          {images.map((image,index)=>{
              return(
                <CustomImages key={index} src={image} paddingTop={"80%"}/>
              )
          })}
      </div>
    </div>
  )
}

export default HeroSection
