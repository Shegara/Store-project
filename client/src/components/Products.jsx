import React from 'react'
import Product from './Product'
import axios from 'axios'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


const Products = ({limit, cat, filter, sort}) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=> {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat 
          ? `http://localhost:5000/api/products?category=${cat}` 
          : `http://localhost:5000/api/products` 
        )
        setProducts(res.data)
        console.log(res)
      } catch (err) {}
    }
    getProducts()
  }, [cat])

  
  useEffect(() => {
    cat && 
    setFilteredProducts(
      products.filter((item) => {
        if (filter === 'Rarity') {
          return true
        } else {
          return typeof item.rarity === 'string' && item.rarity.includes(filter)
        }
      })
    )
  }, [products, cat, filter])

  useEffect(() => {
    let sorted = [...(cat ? filteredProducts : products)];
      if (sort === "newest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (sort === "asc") {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sort === "desc") {
      sorted.sort((a, b) => b.price - a.price)
    }
    setFilteredProducts(sorted);
  }, [sort])


  return (    
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
          .slice(0, limit)
          .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products
