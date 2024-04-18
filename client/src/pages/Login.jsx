import React from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {Toaster, toast} from 'sonner'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url('./images/wallpaper.jpg');
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 1.2rem;
    background-color: white;
`

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    padding: 0.6rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
`

const Button = styled.button`
    border: none;
    width: 40%;
    padding: 1rem 1.2rem;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 7px;
    transition: box-shadow 0.3s;

    &:hover{
        box-shadow: 0 0 10px 5px rgba(17, 168, 161, 0.7);

    &:disabled{
        cursor: not-allowed;
    }
}
`

const Links = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
`;


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isFetching} = useSelector((state) => state.user)
    
    
    
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await login(dispatch, { username, password });
        } catch (error) {
            toast.error("Failed to login. Please check your credentials.");
        }
    }


    return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input 
                    placeholder="Username" 
                    onChange={(e) => setUsername (e.target.value)}>
                </Input>
                <Input 
                    placeholder="Password"
                    type = "password"
                    onChange={(e) => setPassword (e.target.value)}>
                </Input>
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                <Links>FORGOT YOUR PASSWORD?</Links>
                <Link to={'/register'}  style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Links >CREATE A NEW ACCOUNT</Links>
                </Link>
            </Form>
        </Wrapper>
        <Toaster richColors/>
    </Container>
)
}

export default Login
