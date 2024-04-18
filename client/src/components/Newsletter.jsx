import React from 'react'
import styled, { withTheme } from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const HorizontalRule = styled.hr`
  border: 0;
  height: 2px;
  background-color: lightgray;
  width: 100%;
  margin-top: 4rem; 
`;

const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 1.2rem;
`

const Desc = styled.div`
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 1.2rem;
`

const InputContainer = styled.div`
    width: 50%;
    height: 2.5rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 1.1rem;
`

const Button = styled.button`  
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 10px 5px rgba(17, 168, 161, 0.7);
}
`

const Newsletter = () => {
  return (
    <div>
        <HorizontalRule/>
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get updates whenever a new set hits the shelves!</Desc>
            <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    </div>
  )
}

export default Newsletter
 


