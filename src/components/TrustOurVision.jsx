import { Typography, Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import back from '../assets/images/back.jpg';

const BackGround = styled.div`
  height: 580px;
  width: 1000px;
  background-image: url(${back});
  background-size: cover;
`;

const Li = styled.li`
  color: #fff;
`;

const TrustOurVision = () => {
  return (
    <BackGround>
      <Box
        width='70%'
        height='100%'
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='center'
        pl='40px'
        sx={{ boxShadow: '-21px 31px 1px 5px #F5F8FA' }}
      >
        <Typography weight='bold' fontSize='35px' color='#fff'>
          Trust our vision
        </Typography>
        <Typography weight='semibold' fontSize='16px' color='#fff'>
          When it comes to land surveying, you have enough on your plate. Our
          goal at CADDrafters is to let you focus on what you do best while we
          take care of the technology. Simply submit your data to us and we
          create high-quality AutoCAD drawings for your use. You get to lower
          your overhead and get more done with CADDrafters!
        </Typography>
        <Box mt='20px'>
          <Typography weight='bold' fontSize='35px' color='#fff'>
            We offer services :
          </Typography>
          <ul>
            <Li>
              <Typography weight='semibold' fontSize='16px' color='#fff'>
                Boundary Surveys
              </Typography>
            </Li>
            <Li>
              <Typography weight='semibold' fontSize='16px' color='#fff'>
                ALTA Survey
              </Typography>
            </Li>
            <Li>
              <Typography weight='semibold' fontSize='16px' color='#fff'>
                Topographic Survey
              </Typography>
            </Li>
            <Li>
              <Typography weight='semibold' fontSize='16px' color='#fff'>
                Tree Surveys
              </Typography>
            </Li>
          </ul>
        </Box>
      </Box>
    </BackGround>
  );
};

export default TrustOurVision;
