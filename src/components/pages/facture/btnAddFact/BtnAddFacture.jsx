import React from "react";
import CustomizedDialogs from "./BtnAddFactureDialog";
import RegistrationForm from "./BtnAddFactureInd";

function BtnAddFacture() {
  return (
    <div>
      <CustomizedDialogs title={"Add Facture (New Page)"}>
        <RegistrationForm />
      </CustomizedDialogs>
    </div>
  );
}

export default BtnAddFacture;
