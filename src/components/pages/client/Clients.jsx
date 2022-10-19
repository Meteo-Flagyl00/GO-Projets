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
  //get data from api 'axios'

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  // search through all pagination pages

  // const pageCount = Math.ceil(
  //   clients.filter((client) => {
  //     if (searchTerm === "") {
  //       return client;
  //     } else if (
  //       client.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       client.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  //     ) {
  //       return client;
  //     }
  //     return false;
  //   }).length / UsersPerPage
  // );

  // const handlePageChange = ({ selected }) => {
  //   setPageNumber(selected);
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
            // onPageChange={handlePageChange}
            UsersPerPage={UsersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            marginPagesDisplayed={2}
            // forcePage={pageNumbers}
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
