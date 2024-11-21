import React from 'react'
import { Hero } from '../pages/Hero'
import Navbar from '../pages/Navbar'
import Discover from '../pages/Discover'
import { Perfection } from '../pages/Perfection'
import { Guideline } from '../pages/Guideline'
import Counts from '../pages/Counts'
import Popular from '../pages/Popular'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Discover />
      <Perfection />
      <Guideline />
      <Counts />
      <Popular />
    </div>
  )
}

export default Main