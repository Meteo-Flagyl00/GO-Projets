import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/sidebar/Sidebar";

import { Routes, Route } from "react-router-dom";
import Clients from "./components/pages/client/Clients";
import Facture from "./components/pages/facture/Facture";
import Projects from "./components/pages/projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import NewFacture from "./components/pages/NewFacture/NewFacture";
import RegistrationForm from "./components/editClient/editClientInd";
import ViewClient from "./components/pages/viewClient/ViewClient";
import Invoice from "./components/pages/factInvoice/Invoice";
// import ReactGA from "react-ga";

function App() {
  // const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
  // ReactGA.initialize(TRACKING_ID);
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar /> 
        <Routes>
          <Route path="/" element={<MainDash />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Clients/:id" element={<RegistrationForm />} />
          <Route path="/Facture" element={<Facture />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/NewFacture" element={<NewFacture />} />
          <Route path="/Facture/Invoice/:id" element={<Invoice />} />
          <Route path="/Clients/ViewClient/:id" element={<ViewClient />} />
          <Route path="/Projects/:id" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
