import React, { useState, useMemo } from "react";
import "./Clients.css";
// import { UilTrash, UilEye, UilEllipsisH } from "@iconscout/react-unicons";

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Popover from "react-bootstrap/Popover";
// import { Clients_data } from "../../data/Data";

// import userData from "../../data/MOCK_DATA.json";

// import { Table } from "react-bootstrap";

// import CustomizedDialogs from "../../editClient/editClientDia";
// import RegistrationForm from "../../editClient/editClientInd";

// import BtnAddClient from "./btnAddClient/BtnAddClient";
import Pagination from "../../Pagination";
import { useEffect } from "react";
import axios from "axios";
import ClientTable from "../clientTable/ClientTable";
// import TablePagination from '@mui/material/TablePagination';

function Clients() {



  // const [clients, setClients] = useState(userData);

  // DEl client button

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  // const handleShow = (e) => {
  //   e.preventDefault();
  //   setShow(true);
  // };

  //del item

  // const [deleteId, setDeleteId] = useState("");
  // const [sho, setSho] = useState(false);

  // const handleFermer = () => {
  //     setShow(false);
  // };
  // const handleClickDelete = (id) => {
  //     setDeleteId(id);
  //     setShow(true);
  // };
  // const handleDeleteItem = () => {
  //     setData((pre) => {
  //     const newArray = [...pre];
  //     return newArray.filter((item) => item._id !== deleteId);
  //     });
  //     setShow(false);
  // };
  // dummyjson

  // const [data, getData] = useState([]);
  // const URL = "https://dummyjson.com/users";

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   fetch(URL)
  //     .then((res) => res.json())

  //     .then((response) => {
  //       console.log(response);
  //       getData(response);
  //     });
  // };




  //get data from api 'axios'

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://6336d4765327df4c43ca66a2.mockapi.io/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });



  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [UsersPerPage] = useState(5);


  // Get current clients
  const indexOfLastUser = currentPage * UsersPerPage;
  const indexOfFirstUser = indexOfLastUser - UsersPerPage;
  const currentusers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // search 
    // const __handleSearch = (event) => {
  //   setSearch(event.target.value);
  //   if (event.target.value !== "") {
  //     let search_results = userData.filter(
  //       (item) =>
  //         item.first_name.toLowerCase().includes(search.toLowerCase()) ||
  //         item.last_name.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setClients(search_results);
  //   } else {
  //     setClients(userData);
  //   }
  // };

 

  return (
    <div className="ClTable">
      <h1>Clients List</h1>

      <div className="TableClient">
        {/* <TableClient/> */}
        <div className="tableCl">
          <ClientTable users={currentusers} />
        </div>
        <div className="pagination">
          <Pagination
            UsersPerPage={UsersPerPage}
            totalUsers={users.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
