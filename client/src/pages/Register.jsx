import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Toaster, toast} from 'sonner'
import { Link } from 'react-router-dom'


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
    width: 40%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 1.2rem 0.6rem 0rem 0rem;
    padding: 0.6rem;
`

const Agreement = styled.span`
    font-size: 0.7rem;
    margin: 1.2rem 0rem;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    
`

const Button = styled.button`
    border: none;
    flex: 1;
    max-width: 40%;
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
}

`

const StyledLink = styled(Link)`
    color: black;
`

const Register = () => {


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            toast.error("Your passwords do not match")
            return
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData)
            console.log('User registered successfully', response.data)
            navigate('/login')
        } catch (error) {
            console.error('Registration failed', error)
        }
    }


  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
                <Agreement>
                    By creating an account, I consent the processing of by personal data in accordance with the <b> PRIVACY POLICY </b>                
                </Agreement>
                <LinkContainer>
                    <Button type='submit' >
                        CREATE
                    </Button>
                    <StyledLink to={'/login'}>
                        Already have an account? Log in
                    </StyledLink>
                </LinkContainer>
            </Form>
        </Wrapper>
        <Toaster richColors/>
    </Container>
    
  )
}

export default Register
