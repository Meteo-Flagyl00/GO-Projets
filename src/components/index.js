import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleBreakpoints } from "@mui/system";

const RegistrationForm = () => {
  const paperStyle = { padding: "0 15px 0 15px", width: 500 };
  const btnStyle = { marginTop: 10 };
  const phoneRegExp = /^[0-9]{2}[0-9]{8}/;
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const CIN = /^[A-Z][A-Z][0-9]/;

  const nationality = /[A-z] /;

  let history = useNavigate();
  const [user, setUser] = useState({
      FullName:'',
      Email: '',
      Phone: '',
      Nationality: ''
  });

  // const { firstName, lastName, email, phoneNumber, cin, password, confirmPassword } = user;
  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.firstName]: e.target.value });
  // };

  const initialValues = {
    FullName:'',
    Email: '',
    Phone: '',
    Nationality: ''
  };
  const validationSchema = Yup.object().shape({
    FullName: Yup.string().min(3, "It's too short").required("Required"),



    Email: Yup.string().email("Enter valid email").required("Required"),
    // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
    Phone: Yup.string()
      .matches(phoneRegExp, "Enter valid Phone number")
      .required("Required"),

      Nationality: Yup.string().min(3, "It's too short").required('required')
  });

  const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("https://6336d4765327df4c43ca66a2.mockapi.io/users", {
        FullName: user.FullName,
        Email: user.Email,
        Phone: user.Phone,
        website: user.WebSite
      }).then(()=>{
        history.push('/Clients')
      })
    };

    function handle(e) {
      const newData = {...user}
      newData[e.target.id] = e.target.value;
      setUser(newData)
      console.log(newData)
    }

  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Typography variant="caption">
            Fill the form to add a Client{" "}
          </Typography>
        </Grid>
        <form onSubmit={(e)=> onSubmit(e)} style={{display: "flex", gap:"1rem", flexDirection:"column"}}
        >

          <input className="inp" placeholder="Name" type="text" onChange={(e)=> handle(e)} id="FullName" value={user.FullName}/>

          <input className="inp" placeholder="Email" type="text" onChange={(e)=> handle(e)} id="Email" value={user.Email}/>

          <input className="inp" placeholder="Phone" type="text" onChange={(e)=> handle(e)} id="Phone" value={user.Phone}/>

          <input className="inp" placeholder="nationality" type="text" onChange={(e)=> handle(e)} id="Nationality" value={user.Nationality}/>

          <Button
                type="submit"
                style={btnStyle}
                variant="contained"
                color="primary"
              >
                Register
          </Button>
        </form>
        {/* <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <Form noValidate>
              <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} />

              <Field
                as={TextField}
                name="FullName"
                label="FullName"
                onChange={(e) => handle(e)}
                fullWidth
                error={props.errors.FullName && props.touched.FullName}
                helperText={<ErrorMessage name="FullName" />}
                required
              />

              <Field
                as={TextField}
                name="lastname"
                label="lastName"
                fullWidth
                error={props.errors.name && props.touched.name}
                helperText={<ErrorMessage name="lastname" />}
                required
              />

              <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/>

              <Field
                as={TextField}
                name="Email"
                label="Email"
                onChange={(e) => handle(e)}
                fullWidth
                error={props.errors.Email && props.touched.Email}
                helperText={<ErrorMessage name="Email" />}
                required
              />

              <Field
                as={TextField}
                name= "Phone"
                label="Phone Number"
                onChange={(e) => handle(e)}
                fullWidth
                error={props.errors.Phone && props.touched.Phone}
                helperText={<ErrorMessage name="Phone" />}
                required
              />

              <Field
                as={TextField}
                name="cin"
                label="CIN"
                fullWidth
                error={props.errors.name && props.touched.name}
                helperText={<ErrorMessage name="cin" />}
                required
              />

              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                error={props.errors.password && props.touched.password}
                helperText={<ErrorMessage name="password" />}
                required
              />

              <Field
                as={TextField}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                error={
                  props.errors.confirmPassword && props.touched.confirmPassword
                }
                helperText={<ErrorMessage name="confirmPassword" />}
                required
              />

              <Field
                as={TextField}
                name="Nationality"
                label="Nationality"
                onChange={(e) => handle(e)}
                fullWidth
                error={
                  props.errors.Nationality && props.touched.Nationality
                }
                helperText={<ErrorMessage name="Nationality" />}
                required
                />

              <Button
                type="submit"
                style={btnStyle}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik> */}
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
