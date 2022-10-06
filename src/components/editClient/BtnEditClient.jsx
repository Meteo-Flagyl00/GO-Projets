import React from 'react'
import CustomizedDialogs from "../editClient/editClientDia";
import RegistrationForm from "../editClient/editClientInd";

function BtnEditClient() {
  return (
    <div>
      <CustomizedDialogs title={"Edit Client"}>
        <RegistrationForm />
      </CustomizedDialogs>
    </div>
  );
}

export default BtnEditClient