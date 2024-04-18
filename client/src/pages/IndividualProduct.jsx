import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {publicRequest} from '../requestMethods'
import {addProduct} from "../redux/cartRedux"
import {useDispatch} from "react-redux"
import {Toaster, toast} from 'sonner'



const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 3rem;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
    display: flex;

`

const Image = styled.img`
    width: 70%;
    margin-left: 6rem;
    max-width: 100%;
`

const InfoContainer = styled.div`
    width: 70%;
    max-width: 100%;
    flex: 1;
    padding: 0rem 3rem;
    background-color: teal;
    text-shadow: rgba(0, 0, 0, 0.3) -1px -1px 0,  
                 rgba(0, 0, 0, 0.3) 2px -1px 0,
                 rgba(0, 0, 0, 0.3) -1px  2px 0,
                 rgba(0, 0, 0, 0.3) 2px  2px 0;
    color: white;
    border-radius: 20px;
    
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 4rem;
    text-align: center;
`

const Desc = styled.p`
    margin: 1rem 0rem;
    font-size: 1.5rem;
`

const FilterContainer = styled.div`
    margin: 5rem 0rem;
    display: flex;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 0rem 7rem;
`

const FilterTitle = styled.span`
    font-size: 2rem;
    font-weight: 300;
`

const FilterItemContainer = styled.select`
    margin-left: 0.5rem;
    padding: 0.5rem;
    font-family: "Montserrat", sans-serif;  
    
`

const FilterItem = styled.option`
    text-align: center;
`

const AddContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-weight: 300;
    font-size: 3.4rem;
    flex: 1;
    margin-left: 13rem;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`;

const Amount = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    font-size: 2rem;
    font-weight: 500;
`;

const IconContainer = styled.div`
    cursor: pointer;
    position: relative;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 7rem;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    margin-left: 2rem;
    border-radius: 8px;
    transition: box-shadow 0.3s;

  &:hover{
      background-color: #f8f4f4;
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.7);
  }
`;



const IndividualProduct = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data)
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }
        getProduct()
    },[id])


const handleQuantity = (type) => {
    if(type === 'dec'){
       quantity > 1 && setQuantity(quantity - 1)
    } else {
        setQuantity(quantity + 1)
    }
}

const handleClick = () => {
    dispatch(
        addProduct({...product, quantity})
    )
}

return (
    <Container>
    <Hero/>
    <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.name}</Title>
                <Desc>{product.desc}</Desc>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Rarity</FilterTitle>
                        <FilterItemContainer>
                            <FilterItem>{product.rarity}</FilterItem>    
                        </FilterItemContainer>
                    </Filter>        
                    <Filter>
                        <FilterTitle>Condition</FilterTitle>
                        <FilterItemContainer>
                                <FilterItem>{product.condition}</FilterItem>    
                        </FilterItemContainer>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <Price>$ {product.price}</Price>            
                    <AmountContainer>
                        <IconContainer>
                            <RemoveIcon onClick={()=> handleQuantity('dec')}/>
                        </IconContainer>
                        <Amount>{quantity}</Amount>
                        <IconContainer>
                            <AddIcon onClick={()=> handleQuantity('inc')}/>
                        </IconContainer>
                    </AmountContainer>
                    <ButtonContainer onClick={() => toast.success('Product added')}>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </ButtonContainer>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    <Newsletter/>
    <Footer/>
    <Toaster richColors/>
    </Container>
  )
}
export default IndividualProduct
