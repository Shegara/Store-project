import React from 'react'
import Slider from '../components/Slider'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'


const Header = styled.h1`
font-size: 4rem;
font-weight: bolder;
text-align: center;
`


const Main = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Header>POPULAR PRODUCTS</Header>
      <Products limit={4}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Main



