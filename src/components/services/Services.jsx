import React, { useState } from 'react';
import styled from 'styled-components';
import Service from './Service';
import graph from '../../assets/images/graph.png';
import license from '../../assets/images/license.png';
import rocket from '../../assets/images/rocket.png';
import { Box, Typography } from '@mui/material';

const Container = styled.div`
  margin-top: -80px;
  padding: 5% 15%;
  background-color: #f5f8fa;
`;

const services = [
  {
    image: license,
    title: 'Professionalism',
    description:
      'The team at Civil Drafters always communicates with our clients from a place of respect and professionalism. We recognize that you’re an essential part of our success.',
  },
  {
    image: rocket,
    title: 'Streamkubed service',
    description:
      'We make the land surveying process simple. All you have to do is provide us with your data and you’ll receive impeccable AutoCad drawings.',
  },
  {
    image: graph,
    title: 'Efficiency',
    description:
      'Too many job sites to visit this week? Offload some of your time-consuming tasks to us, where we’ll create your drawings and free up more time for you in the field.',
  },
];

const Services = () => {
  const showService = services.map((el, index) => (
    <Service
      image={el.image}
      title={el.title}
      description={el.description}
      key={index}
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
      <Box display='flex' justifyContent='space-between' mt='66px'>
        {showService}
      </Box>
    </Container>
  );
};

export default Services;
