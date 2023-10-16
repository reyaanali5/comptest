import React from "react";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Auth.css'
import { BrowserRouter as Router, Route, Redirect, Link, Routes, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const SignUp = () => {

    const schema = Yup.object().shape({
        name: Yup.string().required().min(3, 'Too short!').max(50, 'Too long!').label("Name"),
        email: Yup.string().email('Please enter a valid email address').required('Email is required').label('Email'),
        password: Yup.string().required('Please enter a password')
            .min(6, 'Password must be at least 6 characters long')
            .label('Password'),
    });

    const navigate = useNavigate();

    const handleSubmit = async (values) => { //the variable is values
        try { //to check if there is any errors from Firebase method
            const { user } = await createUserWithEmailAndPassword(getAuth(), values.email, values.password); //user will take the email, password, name and the method will create user on firebase
            navigate("/");
            await updateProfile(user, { displayName: values.name });
        } catch (error) {  //if there is any errors it will display console
            console.log('got error: ', error.message);
        }
    };

    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    },);

    return (
        <div>
            <h2>Sign Up</h2>
            <Formik initialValues={{ name: '', email: '', password: '', }} onSubmit={handleSubmit} validationSchema={schema}>
                <Form className="signUp-form">
                    <div className="form-items">
                        <div className="field">
                            <label htmlFor="email">Name: </label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email: </label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password: </label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );

}
export default SignUp;

