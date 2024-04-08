import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import BackgroundImage from './Components/BackgroundImage/BackgroundImage'
import Wrapper from './Components/Wrapper/Wrapper'
import BestTv from './Components/BestTv/BestTv'
import TrendingMovies from './Components/TrendingMovies/TrendingMovies'
import Collection from './Components/Collection/Collection'
import Adventure from './Components/Adventure/Adventure'
import Trillers from './Components/Trillers/Trillers'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BackgroundImage />
      <Navbar />
      <Wrapper />
     <BestTv />
     <TrendingMovies />
     <Collection />
     <Adventure />
     <Trillers />
     <Footer />
    </div>
  )
}

export default App
