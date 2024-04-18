import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import { logout } from "../redux/userRedux"
import { clearCart } from "../redux/cartRedux"; 
import {Toaster, toast} from 'sonner'



const Container = styled.div`
  height: 4rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  padding: 0.7rem 1.4rem;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const InputWrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.4rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Icon = styled(SearchIcon)`
  font-size: 1.2rem;
  color: gray;
`;

const Center = styled.h1`
  flex: 1;
  text-align: center;
  color: teal;
`;

const Image = styled.img`
  max-width: 30%;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 0.85rem;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 1.5rem;
  position: relative;
`;

const Badge = styled.div`
  top: -8px;
  right: -8px;
  position: absolute;
  background-color: #008080;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 400;
  z-index: 1;
`;


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logout())
    dispatch(clearCart())
    toast.success('Successfully logged out!')
  }



  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <InputWrapper>
            <Input type="text" />
            <Icon />
          </InputWrapper>
        </Left>
        <Center>
          <Link to='/'>
            <Image src='/images/logo.jpg'/>
          </Link>
        </Center>
        <Right>
          <Link to='/register' style={{ textDecoration: 'none', color: 'inherit'}}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to='/login' style={{ textDecoration: 'none', color: 'inherit'}}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem onClick={handleClick}>
            LOGOUT
          </MenuItem>
          <MenuItem>
          <Link to='/cart' style={{ textDecoration: 'none', color: 'inherit'}}>
              <Badge>{quantity}</Badge>
              <Cart />
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
      <Toaster richColors />
    </Container>
  );
};

export default Navbar;