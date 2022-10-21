// NPM Packages
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Redux's Action Components
import { emptyCart } from "../redux/action";
import { productSearch } from "../redux/productAction";

// React Icon's Components
import cartImage from "../cart1.png";
import { FaUserCheck } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// Component
import { ErrorMessages } from "../common/ErrorMessage";

// React Bootstrap's Component
import Modal from "react-bootstrap/Modal";

/**
 * Method to handle the header portion
 * @returns node
 */
const Header = () => {
  
  // To navigate one component to another 'useNavigate' hook used.
  const navigate = useNavigate();

  // 'useDispatch' to dispatch the action.
  const dispatch = useDispatch();

  // 'useSelector' to get redux store state globally.
  const result = useSelector((state) => state.cartData);

  // State
  const [lgShow, setLgShow] = useState(false);

  /**
   * Method to handle profile model visibility.
   */
  const handleEditClick = () => {
    setLgShow(false);
  };

  /**
   * Method to handle on logout
   */
  const handleOnLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
      Swal.fire({
        icon: "success",
        title: "Log Out Successfully Done",
        timer: 4000,
        color: "red",
      });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        timer: 4000,
        color: "red",
      });
    }
  };

  /**
   * Method to handle Error Message before login.
   */
  const handleErrorMessage = () => {
    ErrorMessages();
  };

  /**
   * Method to handle empty cart.
   */
  const handleEmptyCart = () => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      dispatch(emptyCart());
    } else {
      ErrorMessages();
    }
  };

  return (
    <div className="header">
      <a href="/" className="text-dark">
      <span></span>
        <span></span>
        <span></span>
        <span></span>
        
         <h3><FaShoppingBag />QuickShop</h3>
      </a>
      <div>
        <div className="search-icon mx-3 ">
          <FaSearch />
        </div>
        <div className="search-box mt-4 mx-3 ">
          <input
            type="text"
            onChange={(event) => dispatch(productSearch(event.target.value))}
            placeholder="I'm looking for"
          />
        </div>
        <div className="add-btn mx-5">
          {localStorage.getItem("email") && localStorage.getItem("password") ? (
            <Link
              to="/addproduct"
              className="btn btn-outline-light btn-sm text-dark mt-4 mx-5"
            >
              Add Product
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline-light btn-sm text-dark border border-light mt-4 mx-5"
              onClick={handleErrorMessage}
            >
              Add Product
            </Link>
          )}
        </div>

        <div className="profile-icon mx-3">
          {localStorage.getItem("email") && localStorage.getItem("password") ? (
            <FaUserCheck onClick={() => setLgShow(true)} />
          ) : (
            <FaUserAltSlash onClick={() => ErrorMessages()} />
          )}
        </div>
      </div>
      <div>
        {localStorage.getItem("email") && localStorage.getItem("password") ? (
          <div className="cart-div">
            <span
              style={{
                position: "relative",
                width: "20px",
                height: "20px",
                color: "white",
                top: "0px",
                borderRadius: "50%",
                backgroundColor: "red",
                left: "-59px",
              }}
            >
              {result.length}
            </span>
            <Link to="/cart">
              <img src={cartImage} alt="" />
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="signup-btn mt-5">
        {localStorage.getItem("email") && localStorage.getItem("password") ? (
          <Link
            className="text-danger btn btn-sm border border-light"
            to="/"
            aria-current="page"
            onClick={handleOnLogout}
          >
            LogOut
          </Link>
        ) : (
          <Link
            className=" text-dark btn btn-sm border border-light"
            aria-current="page"
            to="/login"
          >
            Log In
          </Link>
        )}
        <Link
          className=" text-dark mx-2 btn btn-sm border border-light"
          aria-current="page"
          to="/register"
        >
          Sign Up
        </Link>

        <b
          className="btn btn-sm border border-light mx-5"
          onClick={() => handleEmptyCart()}
        >
          Empty Cart
        </b>
      </div>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example" className="text-start">
            Lawren Joe
          </Modal.Title>
          <img
            className="profile-image"
            width="150px"
            height="150px"
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            }
            alt=""
          />
        </Modal.Header>
        <Modal.Body>
          <Link to="/profile" onClick={handleEditClick}>
            <b>Edit User</b>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Header;
