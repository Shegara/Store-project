import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    justify-content: center;

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 380px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cecfddb7;
    position: relative;
    flex-direction: column;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    max-width: 13rem;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease ;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const Name = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
`


const Product = ({item}) => {
  return (
    <Container>   
        <Circle/>
            <Image src={item.img}/>
            <Name>{item.name}</Name>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <SearchIcon/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
