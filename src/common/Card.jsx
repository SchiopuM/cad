import React, { useState } from 'react';
import styled from 'styled-components';
import { Dialog, DialogContent } from '@mui/material';

const StyledCard = styled.div`
  padding: 10px;
  margin-bottom: 60px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);
  :hover {
    cursor: pointer;
  }
`;

const Content = styled(DialogContent)`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Card = ({ children, image }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDialog = () => setOpen((prevState) => !prevState);

  return (
    <>
      <StyledCard onClick={toggleDialog}>{children}</StyledCard>
      <Dialog
        onClose={toggleDialog}
        aria-labelledby='customized-dialog-title'
        open={isOpen}
        maxWidth='xl'
        scroll='body'
      >
        <Content>
          <img src={image} alt='card' />
        </Content>
      </Dialog>
    </>
  );
};

export default Card;
