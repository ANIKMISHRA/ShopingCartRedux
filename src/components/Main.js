// NPM Packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { addToCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";

// Components
import { ErrorMessages } from "../common/ErrorMessage";
import Slider from "./Slider";
import { Link } from "react-router-dom";

/**
 *
 * @returns node
 */
const Main = () => {
  // 'useDispatch' to dispatch the action.
  const dispatch = useDispatch();

  // 'useSelector' to get state from redux store globally.
  const data = useSelector((state) => state.productData);
  console.log("product data in main component FROM SAGA", data);

  // Component Did Mount
  useEffect(() => {
    dispatch(productList());
  }, []);

  /**
   * Method to handle add to cart.
   * @param {object} item
   */
  const handleAddToCart = (item) => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      dispatch(addToCart(item));
    } else {
      ErrorMessages();
    }
  };

  /**
   * Method to handle remove from cart.
   * @param {string} id
   */
  const handleRemoveFromCart = (id) => {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      dispatch(removeFromCart(id));
    } else {
      ErrorMessages();
    }
  };

  return (
    <div>
      <Slider />
      <h1 className="text-start text-dark" style={{margin: "15px"}}>Products</h1>

      <div className="product-container">
        {data.sort((a,b) => a.id > b.id ? 1 : -1).map((item, index) => (
          <div key={index} className="product-item text-secondary ">
            <Link to={`/detailpage/${item.id}`}><img
              width="370px"
              height="370px"
              src={process.env.PUBLIC_URL + `/productImages/${item.photo}`}
              alt={item.name}
            /></Link>
            <div className="text-start"><h4>₹{item.price}.00 </h4></div>
            <div>
              <button
                className="btn btn-outline-secondary mx-1 btn-sm rounded-circle"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-outline-secondary btn-sm rounded-circle"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remvoe from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
