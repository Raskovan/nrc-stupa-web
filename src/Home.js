import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll'
import './App.css'
import BackgroundVideo from './Components/BackgroundVideo'
import Header from './Components/Common/Header'
import Intro from './Components/Intro'
import NewsletterSubscribe from './Components/NewsletterSubscribe'
import AboutNRC from './Components/AboutNRC'
import AboutStupas from './Components/AboutStupas'
import DWStupas from './Components/AboutDWStupas'
import Teachers from './Components/Teachers'
import Footer from './Components/Common/Footer'

function Home() {
  return (
    <>
      <Header />
      <BackgroundVideo />
      <Intro />
      <NewsletterSubscribe />
      <AboutNRC />
      <AboutStupas />
      <DWStupas />
      <Teachers />
      <Footer />
    </>
  )
}

export default Home
