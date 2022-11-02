// NPM Packages
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

// React bootstrap's components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"

// component
import { registerUser } from "../redux/authAction";
import { signUpSchema } from "../schemas";
import { FaShoppingBag } from "react-icons/fa";

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
const Register = ({show, handleShow,  Hide}) => {

 // const navigate = useNavigate();

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
        Hide();
      },
    });

    const openLoginModel = () => {
      handleShow(true);
      Hide();
    }

  return (
    <div className="container text-start register-form">
      <Modal show={show} onHide={Hide}>
        <Modal.Header className="bg-dark">
          <Modal.Title className="text-light"><FaShoppingBag />QuickShop</Modal.Title>
        </Modal.Header>
        <h3 className="text-center mt-4">Great to see you here!</h3>
        <Modal.Body>
        <Form>
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
          {errors.first_name && touched.first_name && show ? (
            <Form.Label className="text-danger">{errors.first_name}</Form.Label>
          ) : touched.first_name = ''}
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
          {errors.last_name && touched.last_name && show ? (
            <Form.Label className="text-danger">{errors.last_name}</Form.Label>
          ) : touched.last_name = ''}
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
          {errors.email && touched.email && show ? (
            <Form.Label className="text-danger">{errors.email}</Form.Label>
          ) : touched.email = ''}
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
          {errors.password && touched.password && show ? (
            <Form.Label className="text-danger">{errors.password}</Form.Label>
          ) : touched.password = ''}
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
          {errors.confirm_password && touched.confirm_password && show ? (
            <Form.Label className="text-danger">
              {errors.confirm_password}
            </Form.Label>
          ) : touched.confirm_password = ''}
        </Form.Group>
        <p>
        {" "}
        If you have already an account <Link onClick={openLoginModel}> log In </Link>...
      </p>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleSubmit}>
            Create Account
          </Button>
          <Button variant="secondary" onClick={Hide}>
            Cancel
          </Button>
        </Modal.Footer>
        <Modal.Footer>
        <p className="text-secondary mx-4">QuickShop collects and uses personal
             data in accordance with our Privacy Policy. By creating an account, you agree to our 
             Terms & Conditions.</p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Register;
