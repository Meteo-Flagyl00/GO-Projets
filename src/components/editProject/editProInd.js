import React from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const RegistrationForm = () => {
    const paperStyle = { padding: '0 15px 0 15px', width: 400, }
    const btnStyle = { marginTop: 10 }
    const phoneRegExp=/^[2-9]{2}[0-9]{8}/
    
    const initialValues = {
        Project: '',
        Client: '',
        Services: '',
    }
    const validationSchema = Yup.object().shape({
        Project: Yup.string().min(3, "Enter a valid Project name"),
        Client: Yup.string().min(3, "It's too short"),
    })


    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }

    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>Edit the Project down below:</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate style={{}}>
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                            <Field as={TextField} name='project' label='Project' fullWidth
                                error={props.errors.Project && props.touched.Project}
                                helperText={<ErrorMessage name='Project' />} required />

                            <Field as={TextField} name='client' label='Client' fullWidth
                                error={props.errors.Client && props.touched.Client}
                                helperText={<ErrorMessage name='client' />} required />

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
                                color='primary'>Register</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default RegistrationForm;