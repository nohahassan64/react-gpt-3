import React from 'react'
import Feature from '../Feature'
import { featuresData } from './data'
import { FeaturesSec , FeaturesHeading , FeaturesContainer } from './style'

const Features = () => {
  return (
    <FeaturesSec className='section__padding' id='features'>
        <FeaturesHeading>
            <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
        </FeaturesHeading>
        <FeaturesContainer>
          {featuresData.map( (item , index) => (
            <Feature key={index} title={item.title} text={item.text} />
          ))}
        </FeaturesContainer>
    </FeaturesSec>
  )
}

export default Features