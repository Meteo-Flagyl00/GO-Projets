import React, { useState, useEffect } from "react";
import { UilTrash, UilEye, UilEllipsisH } from "@iconscout/react-unicons";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
// import { Clients_data } from "../../data/Data";

// import userData from "../../data/MOCK_DATA.json";

import { Table } from "react-bootstrap";



import BtnAddClient from "../client/btnAddClient/BtnAddClient";
// import Pagination from "@mui/material/Pagination";
// import { useEffect } from "react";
import axios from "axios";
import "./ClientTable.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import BtnEditClient from "../../editClient/BtnEditClient";

function ClientTable({ users }) {

  const {id} = useParams();

  const [user, setUser] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Nationality: "",
  });

  //delete request with axios

  const loadUser = async () => {
    const result = await axios.get(
      `https://6336d4765327df4c43ca66a2.mockapi.io/users/${id}`
    );
    setUser(result.data);
  };

  const handleClick = async (id) => {
    await axios
      .delete(`https://6336d4765327df4c43ca66a2.mockapi.io/users/${id}`)
      .then((res) => {
        console.log("Client deleted ,id:" + id, res);
      });
    loadUser();
  };

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="btnAddCl">
        <BtnAddClient />
        <div className="inpSearch">
          <div className="Client-search">
            <input
              type="text"
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
            <th>Full Name</th>
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
                  item.FullName.toLowerCase().includes(search.toLowerCase())
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
                    <span>{client.FullName}</span>
                  </td>
                  <td>
                    <span>{client.Email}</span>
                  </td>
                  <td>
                    <span>{client.Phone}</span>
                  </td>
                  <td>
                    <span>{client.Nationality}</span>
                  </td>
                  <td>
                    <span>
                      <button
                        className="btnUserDel"
                        onClick={() => handleClick(client.id)}
                      >
                        <UilTrash />
                        {/* <Button variant="" onClick={handleShow}>
                          <UilTrash />
                        </Button>

                        <Modal
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                          keyboard={false}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Delete client</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Be careful you are going to delete client infos. Do
                            you want to proceed the process?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              // onSubmit={this.handleSubmit}
                              onClick={(e) => clientDelete(client.id, e) }
                            >
                              Yes
                            </Button>
                          </Modal.Footer>
                        </Modal> */}
                      </button>

                      <Link
                        className="btnUserEdi"
                        to={`/Clients/Client/${client.id}`}
                      >
                        <BtnEditClient />
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
