import React from 'react'
import { Hero } from '../pages/Hero'
import Navbar from '../pages/Navbar'
import Discover from '../pages/Discover'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Discover />
    </div>
  )
}

export default Main