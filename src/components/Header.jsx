import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import head from '../assets/images/head.jpg';

const Container = styled.div`
  margin-top: 50px;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <Container>
    <Box sx={{ width: '70%' }}>
      <Typography fontSize='14px' fontWeight='bold' color='#929A9F'>
        Land survey company
      </Typography>
      <Box sx={{ margin: '15px 0' }}>
        <Typography fontSize='32px' fontWeight='bold' color='#263640'>
          Engineering office for consulting and drafting topographic drawings.
        </Typography>
      </Box>
      <Typography fontSize='16px' fontWeight='medium' color='#929A9F'>
        If you need reliable drafters - the Dieter CAD Drafters engineering
        office guarantees the success of your projects.
      </Typography>
      <Box sx={{ marginTop: '38px' }}>
        <Button link href='#portfolio'>
          See Portfolio
        </Button>
      </Box>
    </Box>
    <img
      src={head}
      height='500px'
      alt='img'
      style={{ boxShadow: '-21px 50px 1px 5px #F5F8FA', marginLeft: '38px' }}
    />
  </Container>
);

export default Header;
