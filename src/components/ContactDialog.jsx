import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Button as UIButton } from '@mui/material';
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
          <Typography fontWeight='bold'>Email</Typography>
          <Typography>example@mail.com</Typography>
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
