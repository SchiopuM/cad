import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Card from '../common/Card';
import { portfolio, bigSizes } from '../assets/portfolioState';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TrustOurVision from './TrustOurVision';

const Container = styled.div`
  margin-top: -400px;
  padding: 5% 15%;
`;

const Item = styled.div`
  height: ${(props) => (props.media ? '500px' : '370px')};
  width: ${(props) => (props.media ? '400px' : '270px')};
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const theme = useTheme();
  const media = useMediaQuery(() => theme.breakpoints.up('xl'));

  const toggle = () => setOpen((prevState) => !prevState);

  const showService = portfolio.map((el, index) => (
    <Card key={`card-${index}`} image={el.image}>
      <Item image={el.image} media={media} />
    </Card>
  ));

  const extraService = bigSizes.map((el, index) => (
    <Card key={`portfolio-${index}`} image={el.image}>
      <Item image={el.image} media={media} />
    </Card>
  ));

  return (
    <Container id='portfolio'>
      <Box display='flex' justifyContent='center' my='100px'>
        <TrustOurVision />
      </Box>
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
        ) : (
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
              sx={{ ':hover': { cursor: 'pointer', width: '70px' } }}
              onClick={toggle}
            >
              close...
            </Typography>
          </>
        )}
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
        {seeMore && extraService}
      </Box>

      <Button
        color='inherit'
        onClick={() => setSeeMore((prevState) => !prevState)}
      >
        <KeyboardArrowDownIcon
          sx={{ transform: seeMore ? 'rotate(180deg)' : null }}
        />
      </Button>
    </Container>
  );
};

export default Portfolio;
