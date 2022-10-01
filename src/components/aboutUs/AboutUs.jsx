import React from 'react'
import './AboutUs.css'
// import {Line} from 'react-chartjs-2'


function AboutUs() {
  
  return (
    <div className='aboutus'>
      <h1>WebSite Infos </h1> 
      <div className="Visitors">
        <h3>This month Visitors:</h3>
        <p className='p1'>This month your Website was visited by:</p>
        <p className='p2'>200 <span>visitor(s)</span></p>
        
        {/* <Line
        //  labels = {Utils.months({count: 12})}
         data = {{
          labels: ["January","February","March","April","May","June","July",
          "August","September","October","November","December"],
          datasets: [{
            label: 'My First Dataset',
            data: [21, 12, 43, 52, 65, 59, 80, 81, 56, 55, 40, 67],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }}
        height={400}
        width={400}
        /> */}
      </div>

      <h2>Team:</h2>
      <div className="Team">
        something 2
      </div>
    </div>
    
  )
}

export default AboutUs
