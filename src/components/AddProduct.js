// NPM Packages
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// React Bootstrap's Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// Redux Action
import { addingProduct } from "../redux/productAction";
import { FaShoppingBag } from "react-icons/fa";

/**
 * Method to handle the Add Product
 * @returns node
 */
const AddProduct = ({ show, Hide }) => {
  // To navigate one component to another 'useNavigate' hook used.
  const navigate = useNavigate();

  // 'useDispatch' to dispatch the action.
  const dispatch = useDispatch();

  // State
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    color: "",
    category: "",
    brand: "",
  });
  const [photo, setPhoto] = React.useState(null);

  /**
   * Method to handle the input field change.
   * @param {object} param0
   */
  const handleChange = ({ target: { name = "", value = "" } = {} }) => {
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  /**
   * Method to handle the image input field change.
   * @param {object} event
   */
  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0].name);
    }
  };

  /**
   * Method to handle submit
   * @param {object} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // To handle the input field type file data used 'FormData'.
    const formData = new FormData();

    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("color", productData.color);
    formData.append("category", productData.category);
    formData.append("brand", productData.brand);
    formData.append("photo", photo);

    console.log("fdklsjfsadjfljl", Object.fromEntries(formData));
    dispatch(addingProduct(Object.fromEntries(formData)));
    Hide();
    navigate("/");
  };

  return (
    <div className="container text-start register-form">
      {/* <h1 className="text-center">Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formBasicFirstName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicLastName">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="price"
            value={productData.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Product Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="color"
            name="color"
            value={productData.color}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="category"
            value={productData.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword1">
          <Form.Label>Product Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            placeholder="brand"
            value={productData.brand}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicImage">
          <Form.Label>Select Product Image</Form.Label>
          <Form.Control
            type="file"
            name="photo"
            placeholder="image"
            accept="photo/*"
            onChange={handlePhotoChange}
          />
        </Form.Group>
        <Button className="mt-4 full-width " variant="dark" type="submit">
          Add Product
        </Button>
      </Form> */}

      <Modal show={show} onHide={Hide}>
        <Modal.Header className="bg-dark">
          <Modal.Title className="text-light">
            <FaShoppingBag />
            QuickShop
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicFirstName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicLastName">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="price"
                value={productData.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Product Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="color"
                name="color"
                value={productData.color}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="category"
                value={productData.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword1">
              <Form.Label>Product Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                placeholder="brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicImage">
              <Form.Label>Select Product Image</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                placeholder="image"
                accept="photo/*"
                onChange={handlePhotoChange}
              />
            </Form.Group>
            <Button className="mt-5 w-50 " variant="dark" type="submit">
              Add Product
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AddProduct;
