import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'

const ChiefCard = ({chief}) => {
  return (
    <div className='chief-card'>
        <img src={process.env.PUBLIC_URL+chief.img} alt="my" />
      <div className="chief-card-info">
          <h3 className="chief-card-name">{chief.name}</h3>
          <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
          <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
          <p className="chief-icons">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
          </p>
      </div>
    </div>
  )
}

export default ChiefCard
