import React, { useState } from "react";

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
import Pagination from "@mui/material/Pagination";

function Facture() {
  //View Project details
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        Project infos
        <Button variant="" className="morePr">
          {" "}
          <UilEllipsisH />
        </Button>
      </Popover.Header>
      <Popover.Body>There's nothing to see over here.. Yet.</Popover.Body>
    </Popover>
  );

  const [search, setSearch] = useState("");
  const [factures, setFactures] = useState(Factures_data);

  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = Factures_data.filter((item) =>
        // item.ProjectName.toLowerCase().includes(search.toLowerCase()) ||
        item.Client.toLowerCase().includes(search.toLowerCase())
      );
      setFactures(search_results);
    } else {
      setFactures(Factures_data);
    }
  };

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
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <div className="factTable">
          {/* <TableFacture/> */}
          <Table striped bordered hover>
            <thead>
              <th>ID Facture</th>
              <th>Client</th>
              <th>Id Projet</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th text-align="center">Actions</th>
            </thead>

            {factures.length !== 0 ? (
              <tbody>
                {factures.map((facture, index) => (
                  <tr key={index}>
                    <td>
                      <span>{facture.idFact}</span>
                    </td>
                    <td>
                      <span>{facture.Client}</span>
                    </td>
                    <td>
                      <span>{facture.idProj}</span>
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
            ) : null}
          </Table>
        </div>
        <div className="pagination">
          <Pagination count={10} variant="outlined" color="primary" />
        </div>
      </div>
    </div>
  );
}

export default Facture;
