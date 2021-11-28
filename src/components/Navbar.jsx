import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import ContactDialog from './ContactDialog';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 15% 0 15%;
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;

const Link = styled.a`
  text-decoration: none;
  color: #263640;
  font-size: 16px;
  font-weight: bold;
`;

const Navbar = () => (
  <NavbarContainer>
    <a href='/'>
      <img src={logo} height='100px' />
    </a>
    <LinkGroup>
      <Link href='/'>Home</Link>
      <Link href='#services'>Services</Link>
      <Link href='#'>Portfolio</Link>
      <Link href='#'>About us</Link>
    </LinkGroup>
    <ContactDialog />
  </NavbarContainer>
);

export default Navbar;
