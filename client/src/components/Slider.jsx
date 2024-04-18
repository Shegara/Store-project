import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { sliderItems } from '../data';
import Button from './Button'
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden; 
    `

const Arrow = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    background-color: rgb(253, 243, 243);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`
const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex *-100}vw)
  `

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};

`
const ImgContainer = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
`

const Image = styled.img`
    margin-left: 20rem;
    margin-right: 1rem;
`

const InfoContainer = styled.div`
    flex: 1.5;
`

const Title = styled.h1`
    font-size: 4rem;
    color: ${(props) => props.color};
    text-shadow: -2px -2px 0 #000,  
                 2px -2px 0 #000,
                -2px  2px 0 #000,
                 2px  2px 0 #000;
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: ${(props) => props.color};
    text-shadow: -1px -1px 0 #000,  
                 2px -1px 0 #000,
                -1px  2px 0 #000,
                 2px  2px 0 #000;  
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };
  
  return (
    <Container>
      <Arrow direction ="left" onClick={()=>handleClick('left')}>
        <ArrowLeft/>
      </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img}/>
              </ImgContainer>
              <InfoContainer>
                <Title color={item.color}>{item.title}</Title>
                <Desc color={item.color}>{item.desc}</Desc>
                <Link 
                  to={`./products/${item.category}`}
                  style={{ textDecoration: 'none' }} 
                >
                  <Button 
                    text={'SHOP NOW'} 
                    borderColor={item.borderColor} 
                    boxShadowColor={item.boxShadowColor}
                  />
                </Link>  
              </InfoContainer>
            </Slide>
        ))}
        </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick('right')}>
        <ArrowRight/>
      </Arrow>
    </Container>
  )
}

export default Slider
