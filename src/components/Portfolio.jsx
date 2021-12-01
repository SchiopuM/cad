import React, { useState } from 'react';
import styled from 'styled-components';
import Item from '../common/Item';
import { Box, Typography } from '@mui/material';
import Card from '../common/Card';
import { portfolio } from '../assets/portfolioState';
import footerImage from '../assets/images/foot.jpg';

const Container = styled.div`
  padding: 5% 15%;
`;

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prevState) => !prevState);

  const showService = portfolio.map((el, index) => (
    <Card key={`card-${index}`} image={el.image}>
      <Item image={el.image} height='400px' />
    </Card>
  ));

  return (
    <Container id='services'>
      <Typography fontSize='24px' fontWeight='bold' color='#263640'>
        Portfolio
      </Typography>
      <Typography
        fontSize='16px'
        fontWeight='medium'
        color='#929A9F'
        width='50%'
      >
        There are several reasons to acquire a professional land survey for
        residential use, sometimes referred to as a “transactional survey”.
        These include, but are not limited to, buying or selling a home
        {!open ? (
          <Typography
            fontSize='16px'
            fontWeight='medium'
            color='#263640'
            sx={{ ':hover': { cursor: 'pointer' }, marginLeft: '5px' }}
            as='span'
            onClick={toggle}
          >
            read more...
          </Typography>
        ) : null}
        {open ? (
          <>
            {`, adding exterior improvements to your property, replacing or adding a
            fence, installing a pool or even for understanding the elevations of
            your lot for flood insurance purposes. Some of the more common
            residential surveys include: Boundary Surveys
              Title Surveys Mortgage,
              Location Surveys,
              FEMA Elevation Certificates,
              House Location Drawings*Region, 
              Specific Pool Drainage Surveys.`}
            <Typography
              fontSize='16px'
              fontWeight='medium'
              color='#263640'
              sx={{ ':hover': { cursor: 'pointer' } }}
              onClick={toggle}
            >
              close...
            </Typography>
          </>
        ) : null}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        mt='66px'
      >
        {showService}
      </Box>
      <Box display='flex' justifyContent='flex-end'>
        <img
          src={footerImage}
          height='230px'
          style={{
            boxShadow: '-21px 50px 1px 5px #F5F8FA',
          }}
        />
      </Box>
    </Container>
  );
};

export default Portfolio;
