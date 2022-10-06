import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

import axios from 'axios'



function ViewClient() {

  const [user, setUser] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Nationality: "",
  });
  
  const {id} = useParams();

  useEffect(() => {
    loadUser();
  }, []);
 
  const loadUser = async () => {
    const result = await axios.get(`https://6336d4765327df4c43ca66a2.mockapi.io/users/${id}`);
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
                  <b>Full Name: </b>
                  {user.FullName}
                </li>
                <li className='list-group-item'>
                  <b>Email: </b>
                  {user.Email}
                </li>
                <li className='list-group-item'>
                  <b>Phone Number: </b>
                  {user.Phone}
                </li>
                <li className='list-group-item'>
                  <b>Nationality: </b>
                  {user.Nationality}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Clients"}> Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default ViewClient