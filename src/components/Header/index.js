import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { HeaderSec , HeaderContent , HeaderContentInput , HeaderContentPeople, HeaderImage } from './style'

const Header = () => {
  return (
    <HeaderSec className='section__padding' id='home'>
        <HeaderContent>
            <h1 className='gradient__text'>Let's Build Something Amazing With GPT-3 OpenAi</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <HeaderContentInput>
                <input type='email' placeholder='Your Email Address'/>
                <button type='button'>Get Started</button>
            </HeaderContentInput>
            <HeaderContentPeople>
                <img src={people} alt="people" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </HeaderContentPeople>
        </HeaderContent>
        <HeaderImage>
            <img src={ai} alt='ai' />
        </HeaderImage>
    </HeaderSec>
  )
}

export default Header