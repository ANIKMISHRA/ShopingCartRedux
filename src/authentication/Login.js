// NPM Packages
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";

// Redux Action
import { loginUser } from "../redux/authAction";

// Component
import { loginSchema } from "../schemas";

// React Bootstrap's cComponents
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import { FaShoppingBag } from "react-icons/fa";

// Const
const initialValues = {
  email: "",
  password: "",
};

/**
 * Method to handle the user login.
 * @returns node
 */
const Login = ({show, Hide, handleShow, handleClose}) => {

  // To navigate one component to another 'useNavigate' hook used.
  const navigate = useNavigate();

  // 'useDispatch' to dispatch the action.
  const dispatch = useDispatch();

  // 'useSelector' to get redux store state globally.
  const result = useSelector((state) => state.authData);

  /**
   * To handle the form validation using package.
   */
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        const method = result.find(
          (o) => o.email === values.email && o.password === values.password
        );
        if (method) {
          localStorage.setItem("id", JSON.stringify(method.id));
          localStorage.setItem("email", JSON.stringify(values.email));
          localStorage.setItem("password", JSON.stringify(values.password));
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Login Successfully Done",
            timer: 4000,
          });
          navigate("/");
          Hide();
        } else {
          Swal.fire({
            position: "top-right",
            icon: "error",
            title: "User not found",
            timer: 4000,
          });
          navigate("/login");
        }
      },
    });

  /**
   * Component Did Mount
   */
  useEffect(() => {
    dispatch(loginUser());
  }, []);

  const openRegisterModal = () => {
    handleShow(true);
    Hide();
  }

  return (
    <div className="container text-start register-form">
      {/* <h5 className="mx-5 pt-2 font-italic text-secondary">
        Welcome to QuickShop once again {<BsEmojiSmileFill />}
      </h5> */}
      <Modal show={show} onHide={Hide}   centered>
        <Modal.Header className="bg-dark text-light">
          <Modal.Title><FaShoppingBag />QuickShop</Modal.Title>
          <p className="text-end">
        Create a new account <Link onClick={() => openRegisterModal()}>sign up</Link>...
      </p>
        </Modal.Header>
        <h3 className="text-center mt-4"> Great to have you back!</h3>
        <Modal.Body>
        <Form className="mt-4 " >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@gmail.com"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && show ? (
            <Form.Label className="text-danger">{errors.email}</Form.Label>
          ) : touched.email = '' }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="........"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && show ? (
            <Form.Label className="text-danger">{errors.password}</Form.Label>
          ) : touched.password = ''}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="dark" onClick={handleSubmit}>
          Login
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
export default Login;
