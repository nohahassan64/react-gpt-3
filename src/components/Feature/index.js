import React from 'react'
import { FeatureContainer , FeatureTitle , FeatureText } from './style'

const Feature = ({ title , text }) => {
  return (
    <FeatureContainer>
      <FeatureTitle>
        <div></div>
        <h1>{title}</h1>
      </FeatureTitle>
      <FeatureText>
        <p>{text}</p>
      </FeatureText>
    </FeatureContainer>
  )
}

export default Feature