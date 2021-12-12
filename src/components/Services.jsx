import React from 'react';
import styled from 'styled-components';
import Item from '../common/Item';
import { Box, Typography } from '@mui/material';
import { services } from '../assets/serviceState';

const Container = styled.div`
  margin-top: -130px;
  padding: 5% 15%;
  background-color: #f5f8fa;
`;

const Services = () => {
  const showService = services.map((el, index) => (
    <Item
      image={el.image}
      title={el.title}
      description={el.description}
      key={index}
      height='200px'
      boxWidth='32%'
    />
  ));

  return (
    <Container id='services'>
      <Typography fontSize='24px' fontWeight='bold' color='#263640'>
        Services
      </Typography>
      <Typography
        fontSize='16px'
        fontWeight='medium'
        color='#929A9F'
        width='50%'
      >
        When it comes to land surveying, you have enough on your plate. Our goal
        at CADDrafters is to let you focus on what you do best while we take
        care of the technology. Simply submit your data to us and we create
        high-quality AutoCAD drawings for your use. You get to lower your
        overhead and get more done with CADDrafters!
      </Typography>
      <Box display='flex' justifyContent='space-between' mt='66px' mb='300px'>
        {showService}
      </Box>
    </Container>
  );
};

export default Services;
