import React, {useState} from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

// import {useNavigate} from 'react-router-dom';
// import axios from "axios";

const RegistrationForm = () => {
    const paperStyle = { height:'100vh', padding: '60px 100px 15px 60px', width: '100%', }
    const btnStyle = { marginTop: 10 , marginRight: 10}
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
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        cin:'',
        password: '',
        confirmPassword:''
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "It's too short").required("Required"),

        lastName: Yup.string().min(3, "It's too short").required("Required"),

        email: Yup.string().email("Enter valid email").required("Required"),
        // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number").required("Required"),

        cin:Yup.string().matches(CIN,"Enter valid CIN code").required("Required"),

        password: Yup.string().min(8, "Minimum characters should be 8")
        .matches(passwordRegExp,"Password must have one upper, lower case, number, special symbol").required('Required'),

        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches").required('Required')
    })
    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("https://60decafeabbdd9001722d05c.mockapi.io/users", user);
    //     history.push("/");
    //   };
      
    return (
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='h8'>Add New Facture down below: </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => {
        console.log(values);}}>
                    {(props) => (
                        <Form noValidate >
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                            <Field as={TextField} name='firstname' label='firstName' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='firstname' />} required 
                                />

                            <Field as={TextField} name='lastname' label='lastName' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='lastname' 
                                />} required />

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                            <Field as={TextField} name='email' label='Email' fullWidth
                                error={props.errors.email && props.touched.email}
                                helperText={<ErrorMessage name='email' />} required 
                                />

                            <Field as={TextField} name="phoneNumber" label='Phone Number' fullWidth
                                error={props.errors.phoneNumber && props.touched.phoneNumber}
                                helperText={<ErrorMessage name='phoneNumber' />} required 
                                />

                            <Field as={TextField} name='cin' label='CIN' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='cin' />} required 
                                />

                            <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                error={props.errors.password && props.touched.password}
                                helperText={<ErrorMessage name='password' />} required
                               />

                            <Field as={TextField} name='confirmPassword' label='Confirm Password' type='password' fullWidth
                                error={props.errors.confirmPassword && props.touched.confirmPassword}
                                helperText={<ErrorMessage name='confirmPassword' />} required
                                />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Register</Button>

                            <Button typr="print" 
                            style={btnStyle} 
                            variant='contained' 
                            onClick={() => window.print()}>PRINT</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default RegistrationForm; 