import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

    &:hover ${Button}{
        opacity: 1;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 1.2rem;
    text-shadow: -1px -1px 0 #000,  
                 2px -1px 0 #000,
                -1px  2px 0 #000,
                 2px  2px 0 #000; 
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
        <StyledLink to={`/products/${item.cat}`}>
            <Button text={'BUY NOW'}/>
        </StyledLink>
        </Info>
    </Container>
  )
}

export default CategoryItem
