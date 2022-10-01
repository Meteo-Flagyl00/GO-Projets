import React from 'react'

import CustomizedDialogs from '../../../dialog'
import RegistrationForm from '../../..'

import './btnAddCl.css'

function BtnAddClient() {
  return (
    <div className='addCl'>
      <CustomizedDialogs title={"Add Client"}>
        <RegistrationForm />
      </CustomizedDialogs>
    </div>
  )
}

export default BtnAddClient