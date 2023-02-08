import React from 'react'
import possibilityImg from '../../assets/possibility.png'
import { PossibilitySec , PossibilityImage , PossibilityContent } from './style'

const Possibility = () => {
  return (
    <PossibilitySec className='section__padding' id='possibility'>
        <PossibilityImage>
            <img src={possibilityImg} alt='PossibilityImage' />
        </PossibilityImage>
        <PossibilityContent>
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <h4>Request Early Access to Get Started</h4>
        </PossibilityContent>
    </PossibilitySec>

  )
}

export default Possibility