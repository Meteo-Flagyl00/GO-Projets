import React, {useState} from 'react';
import  {AnimateSharedLayout} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';

function Card(props) {
  // so the cards won't be expanded at first
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout AnimateSharedLayout>
      { 
        <CompactCard param = {props}/>
      }
    </AnimateSharedLayout>
  )
}

// Compact card

function CompactCard ({param}){
  const Png = param.png;
  return(
    <div className="compactcard"
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
    }}>
      <div  className='radialbar'>
        <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className='details'>
          <Png />
          <span>${param.value}</span>
          <span> Last 24h</span>
      </div>      
    </div>
  );
}


export default Card