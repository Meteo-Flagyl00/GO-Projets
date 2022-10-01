import React from 'react'
import CustomizedDialogs from './BtnAddFacturedia'
import RegistrationForm from './BtnAddFactureind'

function BtnAddProject() {
  return (
    <div>
      <CustomizedDialogs title={"Add Project"}>
        <RegistrationForm />
      </CustomizedDialogs>
    </div>
  )
}

export default BtnAddProject