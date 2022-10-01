import React from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const RegistrationForm = () => {
    const paperStyle = { padding: '0 15px 0 15px', width: 400, }
    const btnStyle = { marginTop: 10 }
    const phoneRegExp=/^[2-9]{2}[0-9]{8}/
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const CIN= /^[A-Z][A-Z][0-9]/
    
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '', 
        phoneNumber: '',
        password: '',
        confirmPassword:''
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "It's too short"),

        lastName: Yup.string().min(3, "It's too short"),

        email: Yup.string().email("Enter valid email"),
        // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        phoneNumber:Yup.string().matches(phoneRegExp,"Enter valid Phone number"),

        cin:Yup.string().matches(CIN,"Enter valid CIN code").required('Required'),

        password: Yup.string().min(8, "Minimum characters should be 8")
        .matches(passwordRegExp,"Password must have one upper, lower case, number, special symbol"),

        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password not matches").required('Required')
    })
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>  </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate>
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                            <Field as={TextField} name='firstname' label='firstName' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='firstame' />} required />

                            <Field as={TextField} name='lastname' label='lastName' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='lastname' />} required />

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                            <Field as={TextField} name='email' label='Email' fullWidth
                                error={props.errors.email && props.touched.email}
                                helperText={<ErrorMessage name='email' />} required />

                            <Field as={TextField} name="phoneNumber" label='Phone Number' fullWidth
                                error={props.errors.phoneNumber && props.touched.phoneNumber}
                                helperText={<ErrorMessage name='phoneNumber' />} required />

                            <Field as={TextField} name='cin' label='CIN' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='cin' />} required />

                            <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                error={props.errors.password && props.touched.password}
                                helperText={<ErrorMessage name='password' />} disabeled />

                            <Field as={TextField} name='confirmPassword' label='Confirm Password' type='password' fullWidth
                                error={props.errors.confirmPassword && props.touched.confirmPassword}
                                helperText={<ErrorMessage name='confirmPassword' />} required />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Register</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default RegistrationForm;