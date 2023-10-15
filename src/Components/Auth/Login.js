import React, { useContext } from "react";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Auth.css'

import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const Login = () => {
    const navigate = useNavigate();

    const schema = Yup.object().shape({  //Define the schema
        email: Yup.string().email().required().label('Email'),
        password: Yup.string().min(6).required().label("Password"),
    });

    const handleSubmit = async (values) => { //values is the variable
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, values.email, values.password);// the values from register will login using the firebase method
            navigate("/");

        } catch (error) {
            console.log(error.message);
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
            <h2>Login</h2>
            <Formik initialValues={{ email: '', password: '', }} onSubmit={handleSubmit} validationSchema={schema}>
                <Form className="login-form">
                    <div className="form-items">
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
                        <button type="submit">Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );

}
export default Login;

