import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
`

const Link = styled.a`
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 400;
    transition: 0.5s;
    font-size: 1.6rem;
    padding: 10px 20px;
    border: 2px solid #${(props) => props.borderColor || '008080'};


    &:hover{
        letter-spacing: 0.25em;
        box-shadow: 0 0 35px #${(props) => props.boxShadowColor || '008080'};
        cursor: pointer; 
    }

    i {
        position: absolute;
        inset: 0;
        display: block;
        z-index: 1;
    }

    i::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 80%;
        width: 10px;
        height: 2.5px;
        background: white;
        transform: translateX(-50%) skewX(325deg);
        transition: 0.5s;
    }

    &:hover i::before{
        width: 20px;
        left:  20%;
    }

    i::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 20%;
        width: 10px;
        height: 2.5px;
        background: white;
        transform: translateX(-50%) skewX(325deg);
        transition: 0.5s;
    }

    &:hover i::after{
        width: 20px;
        left:  80%;
    }


`

const ButtonSpan = styled.span`
    color: white;
    text-shadow: -1px -1px 0 #000,  
                 2px -1px 0 #000,
                -1px  2px 0 #000,
                 2px  2px 0 #000;  
`

const Italic = styled.i`

`

const Button = (props) => {
  return (
    <Container>
        <Link borderColor={props.borderColor} boxShadowColor={props.boxShadowColor}>
            <ButtonSpan>{props.text}</ButtonSpan>
            <Italic/>
        </Link>
    </Container>
  )
}

export default Button
