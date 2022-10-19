import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";
import { authData } from "./authReducer";

export default combineReducers({
  cartData,
  productData,
  authData,
});
