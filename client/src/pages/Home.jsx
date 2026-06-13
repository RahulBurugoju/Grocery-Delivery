import React from 'react'
import Hero from '../components/Home/Hero'
import {AppPromoBanner, Features, HomeCategories, PopularProducts,Newsletter} from '../components/Home'
function Home() {
  return (
    <div className='min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <Hero />
      <Features />
      <HomeCategories/>
      <PopularProducts/>
      <AppPromoBanner/>
      <Newsletter/>
      {/* Home */}
      </div>
  )
}

export default Home