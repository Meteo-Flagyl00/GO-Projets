import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../imgs/logoProject.png'
import { SidebarData } from '../data/Data'
import { Link } from 'react-router-dom'

const Sidebar = () => {
      // state hook to choose 1 item at a time

      const [selected, setSelected]= useState(0);

    //   const location = useLocation();

    // const [active, setActive] = useState(1);

    // useEffect(() => {
    //     menu.forEach(element => {
    //         if (location.pathname === element.path) {
    //             setActive(element.id);
    //         }
    //     });
    // }, [location.pathname])

    // const __navigate = (id) => {
    //     setActive(id);
    // }

  return (
    <div className='sidebar'>
      {/* logo */}
      <div className='logo'>
        <img src={Logo} alt="project Logo" />
      </div>

      {/* Menu */}
      <div className='menu'>
        {SidebarData.map((item,index)=>{
          return(
            <div className={selected===index?'menuItem active': 'menuItem'}
            key={index}
            onClick={()=>setSelected(index)}
            >
              <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                <item.icon/>
                <span>
                  {item.heading}
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar