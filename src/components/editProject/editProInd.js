import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./editProEdit.css";
// import { TextField } from '@mui/material'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from "yup";

const RegistrationForm = () => {
  const paperStyle = { padding: "0 15px 0 15px", width: 400 };
  const btnStyle = { marginTop: 10, marginBottom: 10 };
  // const phoneRegExp=/^[2-9]{2}[0-9]{8}/

  // const initialValues = {
  //     Project: '',
  //     Client: '',
  //     Services: '',
  // }
  // const validationSchema = Yup.object().shape({
  //     Project: Yup.string().min(3, "Enter a valid Project name"),
  //     Client: Yup.string().min(3, "It's too short"),
  // })

  // const onSubmit = (values, props) => {

  //     alert(JSON.stringify(values), null, 2)
  //     props.resetForm()
  // }
  const [project, setProject] = useState({
    ProjectName: "",
    Client: "",
    Service: "",
  });

  const { id } = useParams();

  //   const { FullName, Email, Phone, Nationality } = user;

  function handle(e) {
    const newData = { ...project };
    newData[e.target.id] = e.target.value;
    setProject(newData);
    console.log(newData);
    // setUser({ ...user, [e.target.id]: e.target.value})
  }

  let Navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/projects/${id}`, project);
    alert("hello");
    Navigate("/Projects");
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/projects/${id}`);
    setProject(result.data);
  };

  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Typography variant="caption">
            Edit the Project down below:
          </Typography>
        </Grid>

        <form
          style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}
          onSubmit={(e) => onSubmit(e)}
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
            placeholder="Client"
            onChange={(e) => handle(e)}
            value={project.Client}
          />

          <label>Services: </label>
          <select
            as="select"
            id="Service"
            style={{ width: 370, height: 50 }}
            onChange={(e) => handle(e)}
            value={project.Service}
          >
            <option value="">--Blank--</option>

            <option value="Digital Marketing">Digital Marketing</option>

            <option value="SEO">Search Engine Optimization(SEO)</option>

            <option value="Developement Web">Developement Web</option>
          </select>

          <div className="btnEdit">
            <Button
              type="submit"
              style={btnStyle}
              variant="contained"
              color="primary"
            >
              Register
            </Button>

            <Link to="/Projects">
              <Button style={btnStyle} variant="contained" color="error">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
