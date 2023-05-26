import React from 'react'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Service from '../components/Service'
import Client from '../components/Client'
import News from '../components/News'
import Footer from '../components/Footer'
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <div>
      <Helmet>
      <title>Home</title>
    </Helmet>
      <Header/>
      <Section1/>
      <Service/>
      <Client/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home
