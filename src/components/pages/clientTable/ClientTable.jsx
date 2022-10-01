import React, { useState } from "react";
import { UilTrash, UilEye, UilEllipsisH } from "@iconscout/react-unicons";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
// import { Clients_data } from "../../data/Data";

// import userData from "../../data/MOCK_DATA.json";

import { Table } from "react-bootstrap";

import CustomizedDialogs from "../../editClient/editClientDia";
import RegistrationForm from "../../editClient/editClientInd";

import BtnAddClient from "../client/btnAddClient/BtnAddClient";
// import Pagination from "@mui/material/Pagination";
// import { useEffect } from "react";
// import axios from "axios";
import "./ClientTable.css";

function ClientTable({ users }) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        Client Infos
        <Button variant="" className="morePr">
          {" "}
          <UilEllipsisH />
        </Button>
      </Popover.Header>
      <Popover.Body>
        <div className="More-info">
          <p>aaaaaaaaaaaaa</p>
          <p>dddddddddddddddddd</p>
        </div>
      </Popover.Body>
    </Popover>
  );

  // DEl client button

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const [search, setSearch] = useState("");

  // delete
  // state = {
  //   id: "",
  // };

  // handleChange = event => {
  //   this.setState({ id: event.target.value });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };
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
            <th>WebSite</th>
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
                      <button className="btnUserDel">
                        <Button variant="" onClick={handleShow}>
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
                            >
                              Yes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </button>

                      <button className="btnUserEdi">
                        <CustomizedDialogs title={"Edit Client"}>
                          <RegistrationForm />
                        </CustomizedDialogs>
                      </button>

                      <button className="btnUserVie">
                        <OverlayTrigger
                          trigger="click"
                          placement="bottom"
                          overlay={popover}
                        >
                          <Button variant="">
                            <UilEye />
                          </Button>
                        </OverlayTrigger>
                      </button>
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
