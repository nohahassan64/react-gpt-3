import React from 'react'
import logo from '../../assets/logo.svg'
import { FooterSec, FooterHeading , FooterBtn , FooterLinks , FooterLinksLogo , FooterLinksContent , FooterCopyright } from './style'

const Footer = () => {
  return (
    <FooterSec className='section__padding'>
        <FooterHeading>
            <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        </FooterHeading>
        <FooterBtn>
            <p>Request Early Access</p>
        </FooterBtn>
        <FooterLinks>
            <FooterLinksLogo>
                <img src={logo} alt='logo' />
                <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
            </FooterLinksLogo>
            <FooterLinksContent>
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </FooterLinksContent>
            <FooterLinksContent>
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </FooterLinksContent>
            <FooterLinksContent>
                <h4>Get in touch</h4>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </FooterLinksContent>
        </FooterLinks>
        <FooterCopyright>
            <p>@2021 GPT-3. All rights reserved.</p>
        </FooterCopyright>

    </FooterSec>
  )
}

export default Footer