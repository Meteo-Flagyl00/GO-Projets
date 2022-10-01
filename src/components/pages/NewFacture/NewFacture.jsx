import React from 'react'
import RegistrationForm from '../facture/btnAddFact/BtnAddFactureInd'
import './NewFacture.css'

function NewFacture() {
  return (
    <div>
    <h1>New Facture</h1>
      <div className='newFact-form'>
        <RegistrationForm />
      </div>
    </div>
  )
}

export default NewFacture