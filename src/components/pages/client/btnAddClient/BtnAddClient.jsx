import React from 'react'

import CustomizedDialogs from '../../../dialog'
import RegistrationForm from '../../..'

import './btnAddCl.css'

function BtnAddClient() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='addCl'>
      <CustomizedDialogs title={"Add Client"} open={open} 
        handleClickOpen={handleClickOpen} 
        handleClose={handleClose}
      >
        <RegistrationForm handleClose={handleClose} />
      </CustomizedDialogs>
    </div>
  )
}

export default BtnAddClient