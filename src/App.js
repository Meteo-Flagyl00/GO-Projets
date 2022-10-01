import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/sidebar/Sidebar';

import { Routes,Route } from "react-router-dom";
import Clients from './components/pages/client/Clients';
import Facture from './components/pages/facture/Facture';
import Projects from './components/pages/projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewFacture from './components/pages/NewFacture/NewFacture';


function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <Sidebar/>
        <Routes>
          <Route path='/' element={<MainDash/>}/>
          <Route path='/Clients' element={<Clients/>}/> 
          <Route path='/Facture' element={<Facture/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/NewFacture' element={<NewFacture/>}/>       
        </Routes> 
      </div>
    </div>
  );
}

export default App;
