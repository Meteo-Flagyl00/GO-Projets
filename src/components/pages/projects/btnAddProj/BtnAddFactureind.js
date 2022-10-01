import React, {useState} from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

// import {useNavigate} from 'react-router-dom';
// import axios from "axios";

const RegistrationForm = () => {
    const paperStyle = { padding: '0 15px 0 15px', width: 400, }
    const btnStyle = { marginTop: 10 }
    const phoneRegExp=/^[0-9]{2}[0-9]{8}/
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const CIN= /^[A-Z][A-Z][0-9]/


    // let history = useNavigate();
    // const [user, setUser] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phoneNumber: '',
    //     cin:'',
    //     password: '',
    //     confirmPassword:''
    // });
  
    // const { firstName, lastName, email, phoneNumber, cin, password, confirmPassword } = user;
    // const onInputChange = (e) => {
    //   setUser({ ...user, [e.target.firstName]: e.target.value });
    // };
  
    
    const initialValues = {
        project: '',
        client: '',
        service: '',
    }
    const validationSchema = Yup.object().shape({
        Project: Yup.string().min(3, "Please, Write a valid project name").required("Required"),

        Client: Yup.string().min(3, "It's too short").required("Required"),

    })
    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("https://60decafeabbdd9001722d05c.mockapi.io/users", user);
    //     history.push("/");
    //   };
      
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>Add Project down below: </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => {
        console.log(values);}}>
                    {(props) => (
                        <Form noValidate >
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                            <Field as={TextField} name='project' label='Project' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='project' />} required 
                                />

                            <Field as={TextField} name='client' label='Client' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='client' 
                                />} required />

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                            <Field as="select" name="Services" style={{width: 370, height:50 }}> 
                                <option value="" selected>--Blank--</option>  
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="SEO">
                                Search Engine Optimization(SEO)
                                </option>
                                <option value="Developement Web">Developement Web</option>

                            </Field>

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Add</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default RegistrationForm;