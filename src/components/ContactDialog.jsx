import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Button as UIButton, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '../common/Button';

const ContactDialog = () => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button onClick={toggleDialog}>Contacts</Button>
      <Dialog
        fullWidth
        maxWidth='xs'
        open={open}
        onClose={toggleDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Contacts'}</DialogTitle>
        <DialogContent>
          <Box display='flex' alignItems='center'>
            <PhoneIcon />
            <Box ml='10px'>
              <Typography>+1(970)-987-0685</Typography>
            </Box>
          </Box>
          <Box display='flex' alignItems='center' my='10px'>
            <AlternateEmailIcon />
            <Box ml='10px'>
              <Typography>caddrafterssurveying@gmail.com</Typography>
            </Box>
          </Box>
          <Box display='flex' alignItems='center'>
            <LocationOnIcon />
            <Box ml='10px'>
              <Typography>
                712 North Willard Court, Chicago, Illinois 60642
              </Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <UIButton color='inherit' onClick={toggleDialog}>
            Close
          </UIButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactDialog;
