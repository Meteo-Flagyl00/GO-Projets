import React from 'react'
import AboutUs from '../aboutUs/AboutUs'
import Cards from '../cards/Cards'
import Table from '../table/Table'
import './MainDash.css'

function MainDash() {
  return (
    <div className="grid-container">
      <div className="maindash">
        <h1>Dashboard</h1>
        <Cards />
        <h1>Recent Clients</h1>
        <Table />
      </div>
      <div className="rightSide">
        <h1>WebSite Infos </h1>
        <AboutUs />
      </div>
    </div>
  );
}

export default MainDash