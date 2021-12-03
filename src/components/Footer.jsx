import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/white_logo.png';
import { Box, Typography } from '@mui/material';

const Container = styled.div`
  padding: 25px 15%;
  background-color: #263640;
`;

const Footer = () => {
  return (
    <Container>
      <Box
        borderBottom='solid 1px #fff'
        display='flex'
        justifyContent='space-between'
      >
        <img
          src={logo}
          height='70px'
          style={{ marginBottom: '15px' }}
          alt='logoWhite'
        />
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Typography color='#fff' fontSize='14px' fontWeight='bold'>
              Address
            </Typography>
            <Typography
              color='#fff'
              fontSize='14px'
              fontWeight='400'
              width='200px'
            >
              712 NORTH WILLARD COURT, CHICAGO, ILLINOIS 60642
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
