import React from 'react';
import styled from 'styled-components';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { aboutUs } from '../assets/aboutUs';
import Item from '../common/Item';
import footerImage from '../assets/images/foot.jpg';

const Container = styled.div`
  margin-top: ${(props) => (props.mt ? '90px' : '100px')};
  padding: 5% 15%;
  background-color: #f5f8fa;
`;

const AboutUs = () => {
  const theme = useTheme();
  const media = useMediaQuery(() => theme.breakpoints.up('xl'));
  const about = aboutUs.map((el, index) => (
    <Item
      key={`about-${index}`}
      title={el.title}
      description={el.description}
      textAlign='left'
      boxWidth='30%'
    />
  ));
  return (
    <Container id='aboutUs' mt={media}>
      <Box display='flex' justifyContent='space-between'>
        <Box width='45%'>
          <Typography fontSize='24px' fontWeight='bold' color='#263640'>
            About us
          </Typography>
          <Typography fontSize='16px' fontWeight='medium' color='#929A9F'>
            Civil Drafters has decades of experience in the land surveying
            industry, and our ability to work virtually with professionals
            across the country is what sets us apart from the rest. We minimize
            your expenses and maximize your productivity by using your field
            data to create high-quality AutoCAD drawings. You can take on more
            clients and promise a faster turnaround time to your clients by
            partnering with Survey Drafters.
          </Typography>
        </Box>
        <img
          src={footerImage}
          height={media ? '350px' : '280px'}
          alt='footerImage'
          style={{
            boxShadow: '-21px 50px 1px 5px #F5F8FA',
            marginTop: `${media ? '-230px' : '-200px'}`,
          }}
        />
      </Box>
      <Box display='flex' justifyContent='space-between' mt='30px'>
        {about}
      </Box>
    </Container>
  );
};

export default AboutUs;
