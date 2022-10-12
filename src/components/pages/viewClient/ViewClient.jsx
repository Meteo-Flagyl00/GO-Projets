import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

import axios from 'axios'



function ViewClient() {

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    nationality: "",
    Projects_done: ""
  });
  
  const {id} = useParams();

  useEffect(() => {
    loadUser();
  });
 
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Client Details</h2>

          <div className="card">
            <div className="card-header">
              Details of client id:
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>First Name: </b>
                  {user.first_name}
                </li>
                <li className='list-group-item'>
                  <b>Last Name: </b>
                  {user.last_name}
                </li>
                <li className='list-group-item'>
                  <b>Email: </b>
                  {user.email}
                </li>
                <li className='list-group-item'>
                  <b>Phone Number: </b>
                  {user.phone}
                </li>
                <li className='list-group-item'>
                  <b>Nationality: </b>
                  {user.nationality}
                </li>
                <li className='list-group-item'>
                  <b>Projects: </b>
                  {user.Projects_done}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={`/Clients/`}> Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default ViewClient