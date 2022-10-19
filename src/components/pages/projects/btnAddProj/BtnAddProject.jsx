import React from 'react'
import CustomizedDialogs from './BtnAddProjectdia'
import RegistrationForm from './BtnAddProjectind'

function BtnAddProject() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CustomizedDialogs title={"Add Project"} open={open} 
        handleClickOpen={handleClickOpen} 
        handleClose={handleClose}>
        <RegistrationForm handleClose={handleClose}/>
      </CustomizedDialogs>
    </div>
  )
}

export default BtnAddProject