import React from 'react'

const CustomImages = ({src,paddingTop}) => {
  return (
    <div className='custom-image' style={{paddingTop:paddingTop}}>
      <img src={src} alt="" />
    </div>
  )
}

export default CustomImages
