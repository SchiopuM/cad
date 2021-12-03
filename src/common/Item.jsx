import { Box, Typography } from '@mui/material';
import React from 'react';

const Item = ({
  alt,
  image,
  title,
  description,
  height = null,
  width = null,
  boxWidth,
  subTitle = false,
  textAlign = 'center',
}) => (
  <Box textAlign={textAlign} width={boxWidth}>
    <img src={image} height={height} alt={alt} width={width} />
    <Box my={subTitle ? '14px' : '24px'}>
      <Typography fontSize='20px' fontWeight='medium' color='#263640'>
        {title}
      </Typography>
    </Box>
    <Box>
      <Typography fontSize='16px' fontWeight='medium' color='#929A9F'>
        {description}
      </Typography>
    </Box>
  </Box>
);

export default Item;
