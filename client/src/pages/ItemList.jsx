import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'

const Container = styled.div``


const Header = styled.h1`
  margin-top: 5rem;
  font-size: 3rem;
  font-weight: bolder;
  text-align: center;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`

const Filter = styled.div`
  margin: 1.2rem;
`

const FilterText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 1.2rem;
`

const Select = styled.select`
  padding: 0.7rem;
  margin-right: 1.2rem;
  font-family: "Montserrat", sans-serif;  
`

const Option = styled.option`
  font-family: "Montserrat", sans-serif;
`

const ItemList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('Newest')
  console.log(sort, filter)

let headerText

switch (cat) {
  case "high_rarity":
    headerText = "High Rarity";
    break;
  case "staple":
    headerText = "Staples";
    break;
  case "bulk":
    headerText = "Bulk";
    break;
  default:
    headerText = 'Popular products';
    break;
}



  return (
    <Container>
      <Hero/>
      <Navbar/>
      <Header>{headerText}</Header>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e) => setFilter(e.target.value)}>
            <Option >
              Rarity
            </Option>
            <Option>Common</Option>
            <Option>Rare</Option>
            <Option>Super Rare</Option>
            <Option>Ultra Rare</Option>
            <Option>Secret Rare</Option>
            <Option>Ultimate Rare</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value ='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products limit={10} cat={cat} filter={filter} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ItemList
