import React, { useState, useEffect } from "react";

import { UilEye, UilEllipsisH } from "@iconscout/react-unicons";
import Button from "@mui/material/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Table } from "react-bootstrap";

import CustomizedDialogs from "../../editFacture/editFactDia";
import RegistrationForm from "../../editFacture/editFactInd";

import { Factures_data } from "../../data/Data";
import "./Facture.css";
import BtnAddFacture from "./btnAddFact/BtnAddFacture";
import Pagination from "./Pagination";
import {Link} from 'react-router-dom'

import axios from 'axios'


function Facture() {
  //View Project details
  // const popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Header as="h3">
  //       Project infos
  //       <Button variant="" className="morePr">
  //         {" "}
  //         <UilEllipsisH />
  //       </Button>
  //     </Popover.Header>
  //     <Popover.Body>There's nothing to see over here.. Yet.</Popover.Body>
  //   </Popover>
  // );

  const [search, setSearch] = useState("");
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/facture")
      .then((res) => {
        console.log(res);
        setFactures(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [FacturesPerPage] = useState(5);

  // Get current Projects
  const indexOfLastFacture = currentPage * FacturesPerPage;
  const indexOfFirstFacture = indexOfLastFacture - FacturesPerPage;
  const currentFactures = factures.slice(indexOfFirstFacture,indexOfLastFacture);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="tableFact">
      <h1>Facture</h1>

      <div className="table-search">
        <div className="inpSearch">
          <BtnAddFacture />
          <div className="fact-search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="factTable">
          {/* <TableFacture/> */}
          <Table striped bordered hover factures={currentFactures}>
            <thead>
              <th>#ID</th>
              <th>Client</th>
              <th>Id Projet</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th text-align="center">Actions</th>
            </thead>

              <tbody>
                {factures
                  .filter((item) => {
                    if (search === "") {
                      return item;
                    } else if (
                      // item.ProjectName.toLowerCase().includes(search.toLowerCase()) ||
                      item.Client.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((facture, index) => (
                    <tr key={index}>
                      <td>
                        <span>{facture.id}</span>
                      </td>
                      <td>
                        <span>{facture.Client}</span>
                      </td>
                      <td>
                        <span>{facture.Proj}</span>
                      </td>
                      <td>
                        <span>{facture.SDate}</span>
                      </td>
                      <td>
                        <span>{facture.DDate}</span>
                      </td>
                      <td>
                        <span>
                          <button className="btnUserEdi">
                            <CustomizedDialogs title={"Edit Facture"}>
                              <RegistrationForm />
                            </CustomizedDialogs>
                          </button>

                          <Link className="btnUserVie" to={`/Facture/Invoice/${facture.id}`}>
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
        <div className="pagination">
        <Pagination
          FacturesPerPage={FacturesPerPage}
          totalFactures={factures.length}
          paginate={paginate}
        />
      </div>
      </div>
    </div>
  );
}

export default Facture;
