import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { editUserProfile } from "../redux/authAction";

const Profile = () => {
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.authData.editUser);
  console.log("authDAta", authData);

  const [userData, setUserData] = useState([]);

  React.useEffect(() => {
    dispatch(editUserProfile());
    setUserData(authData);
  }, []);

  const handleChange = ({ target: { name, value } = {} }) => {
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(value);
  };

  return (
    <div className="container text-start register-form">
      {console.log("userData", userData)}
      <h1 className="text-center mt-3">Update Profile</h1>
      <Form className="mt-3">
        <Form.Group className="mb-2" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="firstname"
            name="first_name"
            value={userData.first_name || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="lastname"
            name="last_name"
            value={userData.last_name || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email@gmail.com"
            value={userData.email || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="........"
            value={userData.password || ""}
            onChange={handleChange}
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword1">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm_password"
            placeholder="........"
            value={userData.confirm_password || ""}
            onChange={handleChange}
            autoComplete="off"
          />
        </Form.Group>
        <Button className="mt-4" variant="dark" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};
export default Profile;
