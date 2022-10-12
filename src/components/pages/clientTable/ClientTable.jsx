import React, { useState, useEffect } from "react";
import { UilTrash, UilEye, UilEllipsisH } from "@iconscout/react-unicons";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
// import { Clients_data } from "../../data/Data";

// import userData from "../../data/MOCK_DATA.json";

import CustomizedDialogs from "../../editClient/editClientDia";
import RegistrationForm from "../../editClient/editClientInd";

import { Table } from "react-bootstrap";



import BtnAddClient from "../client/btnAddClient/BtnAddClient";
// import Pagination from "@mui/material/Pagination";
// import { useEffect } from "react";
import axios from "axios";
import "./ClientTable.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import BtnEditClient from "../../editClient/BtnEditClient";

function ClientTable({ users }) {
  const { id } = useParams();

  const [user, setUser] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Nationality: "",
  });

  //delete request with axios

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8000/users/${id}`
    );
    setUser(result.data);
  };

  const handleClick = async (id) => {
    await axios
      .delete(`http://localhost:8000/users/${id}`)
      .then((res) => {
        console.log("Client deleted ,id:" + id, res);
      });
    loadUser();
  };

  useEffect(()=>{
    handleClick(id)
  },[])
  

  const [search, setSearch] = useState("");

  // delete modal

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  // const handleShow = (e) => {
  //   e.preventDefault();
  //   setShow(true);
  // };

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <div className="btnAddCl">
        <BtnAddClient />
        <div className="inpSearch">
          <div className="Client-search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="search-input"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="cltb">
        <Table striped bordered hover>
          <thead>
            <th>ID</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Nationality</th>
            <th>Actions</th>
          </thead>

          <tbody>
            {users
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                  item.last_name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((client, index) => (
                <tr key={index}>
                  <td>
                    <span>{client.id}</span>
                  </td>
                  <td>
                    <span>{client.first_name}</span>
                  </td>
                  <td>
                    <span>{client.last_name}</span>
                  </td>
                  <td>
                    <span>{client.email}</span>
                  </td>
                  <td>
                    <span>{client.phone}</span>
                  </td>
                  <td>
                    <span>{client.nationality}</span>
                  </td>
                  <td>
                    <span>
                      <button className="btnUserDel" onClick={() => handleClick(client.id)}>
                          <UilTrash />
                      </button>

                      <Link
                        className="btnUserEdi"
                        to={`/Clients/${client.id}`}
                      >
                        <CustomizedDialogs
                          title={"Edit Client"}
                        >
                          <RegistrationForm />
                        </CustomizedDialogs>
                      </Link>

                      <Link
                        className="btnUserVie"
                        variant=""
                        to={`/Clients/ViewClient/${client.id}`}
                      >
                        <Button variant="">
                          <UilEye />
                        </Button>
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ClientTable;
