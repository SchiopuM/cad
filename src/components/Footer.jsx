import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/white_logo.png';

const Container = styled.div`
  padding: 15px 15%;
  background-color: #263640;
`;

const Footer = () => {
  return (
    <Container>
      <img src={logo} height='100px' />
    </Container>
  );
};

export default Footer;
