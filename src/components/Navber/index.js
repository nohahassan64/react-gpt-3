import React , { useState } from 'react'
import logo from '../../assets/logo.svg'
import { RiCloseLine , RiMenu3Line } from 'react-icons/ri'
import { NavbarSec , NavbarLogo , Logo , NavbarLinks , NavbarSign,
        NavbarMenu , NavbarMenuContent , NavbarMenuLinks , NavbarMenuSign
} from './style.js'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
);

const Navbar = () => {
  const [toggle , setToggle ] = useState(false);
  return (
    <NavbarSec>
      <NavbarLogo>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
      </NavbarLogo>
      <NavbarLinks>
        <Menu />
      </NavbarLinks>
      <NavbarSign>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </NavbarSign>
      <NavbarMenu>
        {toggle ? 
          <RiCloseLine color='#fff' size={27} onClick={ () => setToggle(false)} /> :
          <RiMenu3Line color='#fff' size={27} onClick={ () => setToggle(true)} /> 
          }
          {toggle && (
            <NavbarMenuContent className='scale-up-center'>
              <NavbarMenuLinks>
                <Menu />
                <NavbarMenuSign>
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
              </NavbarMenuSign>
              </NavbarMenuLinks>
            </NavbarMenuContent>
          )}
      </NavbarMenu>

    </NavbarSec>
  )
}

export default Navbar