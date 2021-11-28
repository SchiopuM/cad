import { Box, Typography } from '@mui/material';
import React from 'react';

const Service = ({ image, title, description }) => (
  <Box textAlign='center' width='30%'>
    <img src={image} height='200px' />
    <Box my='24px'>
      <Typography fontSize='20px' fontWeight='medium' color='#263640'>
        {title}
      </Typography>
    </Box>
    <Typography fontSize='16px' fontWeight='medium' color='#929A9F'>
      {description}
    </Typography>
  </Box>
);

export default Service;
