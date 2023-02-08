import React from 'react'
import { CTASec , CTAContent , CTAButton } from './style'

const CTA = () => {
  return (
    <CTASec>
        <CTAContent>
            <p>Request Early Access to Get Started</p>
            <h3>Register Today & start exploring the endless possibilities.</h3>
        </CTAContent>
        <CTAButton>
            <button type='button'>Get Started</button>
        </CTAButton>

    </CTASec>
  )
}

export default CTA