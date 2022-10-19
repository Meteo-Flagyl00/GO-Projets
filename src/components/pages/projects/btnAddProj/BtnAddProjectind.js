import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

// import {useNavigate} from 'react-router-dom';
// import axios from "axios";

const RegistrationForm = ({handleClose}) => {
  const paperStyle = { padding: "0 15px 0 15px", width: 400 };
  const btnStyle = { marginTop: 10 };
  // const phoneRegExp=/^[0-9]{2}[0-9]{8}/
  // const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  // const CIN= /^[A-Z][A-Z][0-9]/
  const [project, setProject] = useState({
    ProjectName: "",
    Client: "",
    Service: "",
    StartDate: "",
  });

  const getProjects = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/projects", project).then((res) => {
      console.log("project added successfuly:", res);
        handleClose()
    })
  };

  function handle(e) {
    const newData = { ...project };
    newData[e.target.id] = e.target.value;
    setProject(newData);
    console.log(newData);
  }
  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Typography variant="caption">Add Project down below: </Typography>
        </Grid>
        <Formik>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            onSubmit={(e) => getProjects(e)}
          >
            <label>Project: </label>
            <input
              type="text"
              id="ProjectName"
              placeholder="Project"
              onChange={(e) => handle(e)}
              value={project.ProjectName}
            />

            <label>Client: </label>
            <input
              type="text"
              id="Client"
              placeholder="Client Name"
              onChange={(e) => handle(e)}
              value={project.Client}
            />

            <label>Service: </label>
            <select
              id="Service"
              onChange={(e) => handle(e)}
              value={project.Service}
            >
              <option value="" selected>
                --Blank--
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO">Search Engine Optimization(SEO)</option>
              <option value="Developement Web">Developement Web</option>
            </select>

            <label>Project: </label>
            <input
              type="text"
              id="StartDate"
              placeholder="Date"
              onChange={(e) => handle(e)}
              value={project.StartDate}
            />

            <Button
              type="submit"
              style={btnStyle}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
