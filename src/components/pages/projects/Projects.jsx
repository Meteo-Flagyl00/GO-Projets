import React, { useState, useEffect } from "react";
// import { UilEye, UilEllipsisH } from "@iconscout/react-unicons";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Popover from "react-bootstrap/Popover";
// import { Table } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { Projects_data } from "../../data/Data";

// import CustomizedDialogs from "../../editProject/editProDia";
// import RegistrationForm from "../../editProject/editProInd";
// import BtnAddProject from "./btnAddProj/BtnAddProject";
import "./Projects.css";

import Pagination from "./Pagination";

import axios from "axios";
import ProjectTable from "./ProjectTable/ProjectTable";

function Projects() {
  // Projects data axios
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/projects")
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  // const __handleSearch = (event) => {
  //   setSearch(event.target.value);
  //   if (event.target.value !== "") {
  //     let search_results = Projects_data.filter(
  //       (item) =>
  //         item.ProjectName.toLowerCase().includes(search.toLowerCase()) ||
  //         item.Client.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setProjects(search_results);
  //   } else {
  //     setProjects(Projects_data);
  //   }
  // };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectsPerPage] = useState(5);

  // Get current Projects
  const indexOfLastProject = currentPage * ProjectsPerPage;
  const indexOfFirstProject = indexOfLastProject - ProjectsPerPage;
  const currentprojects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Projects">
      <h1>Projects</h1>
      {/* <TableProject/> */}

      <div className="tableProj">
        <ProjectTable projects={currentprojects} />
      </div>
      <div className="pagination">
        <Pagination
          ProjectsPerPage={ProjectsPerPage}
          totalProjects={projects.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Projects;
