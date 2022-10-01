import React from 'react'
import AboutUs from '../aboutUs/AboutUs'
import Cards from '../cards/Cards'
import Table from '../table/Table'
import './MainDash.css'

function MainDash() {
  return (
    <div className='maindash'>
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>

      {/* <div className='rightSide'>
        <AboutUs/>
      </div> */}
    </div>
  )
}

export default MainDash