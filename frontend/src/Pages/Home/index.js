import React from 'react'
import HomeComponents from '../../Components/HomeComponents'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'
import {Helmet} from "react-helmet";

function Home() {
  return (
    <>
    <Helmet>
      <title>
        Home Page
      </title>
    </Helmet>
    <Navbar/>
    <HomeComponents/>
    <Footer/>
    </>
  )
}

export default Home