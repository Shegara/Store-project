import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled.div`
    display: flex;
    background-color: teal;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.3) -1px -1px 0,  
                 rgba(0, 0, 0, 0.3) 2px -1px 0,
                 rgba(0, 0, 0, 0.3) -1px  2px 0,
                 rgba(0, 0, 0, 0.3) 2px  2px 0;
`

const Logo = styled.h1`

`
const Desc = styled.p` 
    margin: 1.4rem 0rem;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};   
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
`

const Center = styled.div`
    flex: 1;
    padding: 1.2rem;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.3) -1px -1px 0,  
                 rgba(0, 0, 0, 0.3) 2px -1px 0,
                 rgba(0, 0, 0, 0.3) -1px  2px 0,
                 rgba(0, 0, 0, 0.3) 2px  2px 0;
`


const Title=styled.h3`
    margin-bottom: 2rem;
`


const List= styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`


const ListItem = styled.li`
    width: 50%;
    margin-bottom: 0.55rem;
`


const Right = styled.div`
    flex: 1;
    padding: 1.2rem;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.3) -1px -1px 0,  
                 rgba(0, 0, 0, 0.3) 2px -1px 0,
                 rgba(0, 0, 0, 0.3) -1px  2px 0,
                 rgba(0, 0, 0, 0.3) 2px  2px 0;
`

const ContactItem = styled.div`
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHEGARA.</Logo>
            <Desc>
                Getting your hands on the most covetable Yu-Gi-Oh! cards has never been easier! Our store has the best singles meta singles you need to power up your strategy and dominate your opponents. 
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <XIcon/>
                </SocialIcon>               
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Shipping options</ListItem>
                <ListItem>Products on sale</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Upcoming releases</ListItem>
                <ListItem>Best sellers</ListItem>
                <ListItem>NFS items</ListItem>
                <ListItem>Sealed products</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"0.5rem"}}/>
                Kosevo 26, Sarajevo 71000
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"0.5rem"}}/>
                +38766166312
            </ContactItem>
            <ContactItem >
                <EmailIcon style={{marginRight:"0.5rem"}}/>
                markothesego@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
