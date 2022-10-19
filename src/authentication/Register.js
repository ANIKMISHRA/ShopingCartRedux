// NPM Packages
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

// React bootstrap's components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// component
import { registerUser } from "../redux/authAction";
import { signUpSchema } from "../schemas";

// Const
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

/**
 * Method to handle create new account
 * @returns node
 */
const Register = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  /**
   * To handle the form validation using package
   */
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,

      validationSchema: signUpSchema,

      onSubmit: (values) => {
        dispatch(registerUser(values));
        navigate('/login')
      },
    });

  return (
    <div className="container text-start register-form">
      <h1 className="text-center">Register User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="firstname"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.first_name && touched.first_name ? (
            <Form.Label className="text-danger">{errors.first_name}</Form.Label>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="lastname"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.last_name && touched.last_name ? (
            <Form.Label className="text-danger">{errors.last_name}</Form.Label>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email@gmail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <Form.Label className="text-danger">{errors.email}</Form.Label>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="........"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <Form.Label className="text-danger">{errors.password}</Form.Label>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm_password"
            placeholder="........"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <Form.Label className="text-danger">
              {errors.confirm_password}
            </Form.Label>
          ) : null}
        </Form.Group>
        <Button className="mt-4 " variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center">
        {" "}
        If you have already an account <Link to="/login"> log In </Link>...
      </p>
    </div>
  );
};
export default Register;
