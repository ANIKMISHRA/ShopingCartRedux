import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartData);
  const amount =
    cartItems.length &&
    cartItems.map((item) => item.price).reduce((prev, next) => prev + next);


  return (
    <div>
      <div className="text-start mx-4">
        <Link className="text-dark" to="/main">Back</Link>
      </div>
      <h1>CArt</h1>

      <div className="cart-page-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <img
              width="300px"
              height="200px"
              src={process.env.PUBLIC_URL + `/productImages/${item.photo}`}
              alt={item.name}
              className="mt-3"
            />
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            {" "}
            <span>Tax</span>
            <span>0%</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};
export default Cart;
