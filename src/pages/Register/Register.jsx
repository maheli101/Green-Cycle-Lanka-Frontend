import { Col, Row } from "react-bootstrap";
import "./Register.css";
import registerBCK from "../../assets/registerphotos/Regback.jpeg";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterValidation } from './RegisterValidation';

const initialValues = {
  Name: "",
  Email: "",
  Number: "",
  IDcard: "",
  Pwd: "",
  CPwd: "",
  Verify: ""
};

export default function Register() {
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
            onSubmit={(values) => {
              console.log(values);
          
            }}
          >
            {({ errors, touched }) => (
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
                      className={touched.Name && errors.Name ? "error" : ""}
                    />
                    <ErrorMessage name="Name" component="small" className="error-message" />

                    <Field
                      type="text"
                      placeholder="Enter Email"
                      name="Email"
                      className={touched.Email && errors.Email ? "error" : ""}
                    />
                    <ErrorMessage name="Email" component="small" className="error-message" />

                    <Field
                      type="text"
                      placeholder="Contact Number"
                      name="Number"
                      className={touched.Number && errors.Number ? "error" : ""}
                    />
                    <ErrorMessage name="Number" component="small" className="error-message" />

                    <Field
                      type="text"
                      placeholder="NIC"
                      name="IDcard"
                      className={touched.IDcard && errors.IDcard ? "error" : ""}
                    />
                    <ErrorMessage name="IDcard" component="small" className="error-message" />

                    <Field
                      type="password"
                      placeholder="Password"
                      name="Pwd"
                      className={touched.Pwd && errors.Pwd ? "error" : ""}
                    />
                    <ErrorMessage name="Pwd" component="small" className="error-message" />

                    <Field
                      type="password"
                      placeholder="Repeat Password"
                      name="CPwd"
                      className={touched.CPwd && errors.CPwd ? "error" : ""}
                    />
                    <ErrorMessage name="CPwd" component="small" className="error-message" />
                  </div>

                  <div className="custom-reg-dropdown">
                    <label htmlFor="userType">Choose Your Type:</label>
                    <Field as="select" id="userType" name="userType">
                      <option value="driver">Driver</option>
                      <option value="buyer">User</option>
                    </Field>
                  </div>
                  
                  <div className="custom-reg-infield">
                    <Field
                      type="text"
                      placeholder="Enter Verify Number"
                      name="Verify"
                      className={touched.Verify && errors.Verify ? "error" : ""}
                    />
                    <ErrorMessage name="Verify" component="small" className="error-message" />
                  </div>

                  <div className="custom-reg-lastf">
                   <Link to="/login">
                     <button type="submit" className="custom-reg-reg-btn">
                      Register
                    </button>

                   </Link>
                    <div className="custom-reg-sign-reg">
                      <p>
                        Already have an account? <Link to="/login">Sign in</Link>
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
