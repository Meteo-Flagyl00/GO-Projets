import React, { useRef, useState, useEffect } from "react";
import { UilEye, UilEllipsisH } from "@iconscout/react-unicons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import CustomizedDialogs from "../../../editFacture/editFactDia";
import RegistrationForm from "../../../editProject/editProInd";
import BtnAddProject from "../../projects/btnAddProj/BtnAddProject";

import "./ProjectTable.css";

function ProjectTable({ projects }) {
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

  const ref = useRef();

  const [search, setSearch] = useState("");

  // DEl client button

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  // const handleShow = (e) => {
  //   e.preventDefault();
  //   setShow(true);
  // };
  return (
    <div>
      <div className="inpSrch">
        <BtnAddProject />
        <div className="project-search">
          <input
            type="text"
            // value={search}
            placeholder="Search.."
            className="search-input"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="prtbl">
        <Table striped bordered hover>
          <thead>
            <th>ID</th>
            <th>Project</th>
            <th>Client</th>
            <th>Service</th>
            <th>Start Date</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>

          <tbody>
            {projects
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.Client.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((project, index) => (
                <tr key={index}>
                  <td>
                    <span>{project.idProj}</span>
                  </td>
                  <td>
                    <span>{project.ProjectName}</span>
                  </td>
                  <td>
                    <span>{project.Client}</span>
                  </td>
                  <td>
                    <span>{project.Service}</span>
                  </td>
                  <td>
                    <span>{project.StartDate}</span>
                  </td>
                  <td>
                    <span>
                      <select id="status">
                        <option value="start">Start</option>
                        <option value="in progress">In Progress</option>
                        <option value="test">Test</option>
                        <option value="done">Done</option>
                      </select>
                    </span>
                  </td>
                  <td>
                    <span>
                      <input ref={ref} type="file" />

                      <button className="btnUserEdi">
                        <CustomizedDialogs title={"Edit Project"}>
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

export default ProjectTable;
