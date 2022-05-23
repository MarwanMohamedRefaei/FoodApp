import React from 'react'

const CustomImages = ({src,paddingTop}) => {
  return (
    <div className='custom-image' style={{paddingTop:paddingTop}}>
      <img src={src} alt="my" />
    </div>
  )
}

export default CustomImages
