import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Register.css";
import registerBCK from "../../assets/registerphotos/Regback.jpeg";
import { Link, json } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterValidation } from "./RegisterValidation";
import axios from 'axios';
import {post} from '../../Api/Axios.js'



const initialValues = {
  name: "djdjd",
  email: "samhghple@gmail.com",
  contactNumber: "125453445444",
  NIC: "566455565655455",
  password: "123456",
  type: "Driver",
};

export default function Register() {
  const [response, setResponse] = useState('No response yet');

const submit = async () => {
     const response = await post('http://localhost:8000/User/postUser',initialValues )
     console.log(response); 
     setResponse(response);   
  };

  return (
    <div>
      <Row style={{ height: "100vh" }}>
        <Col sm={12} lg={6} md={8}>
          <div
            className="photo-hanger-register"
            style={{
              width: "85%",
              margin: "10% 12%",
              borderRadius: "25px",
            }}
          >
            <img
              src={registerBCK}
              alt="Login background"
              style={{ width: "100%", borderRadius: "25px" }}
            />
          </div>
        </Col>
        <Col lg={6} md={8} sm={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={RegisterValidation}
            // onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, values }) => (
              <Form className="custom-reg-full">
                <div className="custom-reg-allparts">
                  <div className="custom-reg-head">
                    <div className="custom-reg-hair">
                      <h1 className="custom-reg-word">Register Form</h1>
                    </div>
                  </div>

                  <div className="custom-reg-infield">
                    <Field
                      type="text"
                      placeholder="Enter Name"
                      name="Name"
                      value={values.Name}
                      onChange={handleChange}
                      className={touched.Name && errors.Name ? "error" : ""}
                    />
                    <ErrorMessage
                      name="Name"
                      component="small"
                      className="error-message"
                    />

                    <Field
                      type="text"
                      placeholder="Enter Email"
                      name="Email"
                      value={values.Email}
                      onChange={handleChange}
                      className={touched.Email && errors.Email ? "error" : ""}
                    />
                    <ErrorMessage
                      name="Email"
                      component="small"
                      className="error-message"
                    />

                    <Field
                      type="text"
                      placeholder="Contact Number"
                      name="Number"
                      value={values.Number}
                      onChange={handleChange}
                      className={touched.Number && errors.Number ? "error" : ""}
                    />
                    <ErrorMessage
                      name="Number"
                      component="small"
                      className="error-message"
                    />

                    <Field
                      type="text"
                      placeholder="NIC"
                      name="IDcard"
                      value={values.IDcard}
                      onChange={handleChange}
                      className={touched.IDcard && errors.IDcard ? "error" : ""}
                    />
                    <ErrorMessage
                      name="IDcard"
                      component="small"
                      className="error-message"
                    />

                    <Field
                      type="password"
                      placeholder="Password"
                      name="Pwd"
                      value={values.Pwd}
                      onChange={handleChange}
                      className={touched.Pwd && errors.Pwd ? "error" : ""}
                    />
                    <ErrorMessage
                      name="Pwd"
                      component="small"
                      className="error-message"
                    />

                    <Field
                      type="password"
                      placeholder="Repeat Password"
                      name="CPwd"
                      value={values.CPwd}
                      onChange={handleChange}
                      className={touched.CPwd && errors.CPwd ? "error" : ""}
                    />
                    <ErrorMessage
                      name="CPwd"
                      component="small"
                      className="error-message"
                    />
                  </div>

                  <div className="custom-reg-dropdown">
                    <label htmlFor="userType">Choose Your Type:</label>
                    <Field
                      as="select"
                      id="userType"
                      name="userType"
                      value={values.userType}
                      onChange={handleChange}
                    >
                      <option value="driver">Driver</option>
                      <option value="buyer">User</option>
                    </Field>
                  </div>

                  <div className="custom-reg-lastf">
                    <button
                      onClick={submit}
                      type="submit"
                      className="custom-reg-reg-btn"
                    >
                      Register
                    </button>
                    <div className="custom-reg-sign-reg">
                      <p>
                        Already have an account?{" "}
                        <Link to="/login">Sign in</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </div>
  );
}
