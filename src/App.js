import React from 'react'
import Blog from './components/Blog'
import Brand from './components/Brand'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navber'
import Possibility from './components/Possibility'
import WhatGPT3 from './components/WhatGPT3'
import { GlobalStyle , GradientBg } from './globalStyle'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <GradientBg>
        <Navbar />
        <Header />
      </GradientBg>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App