import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("add to cart action", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.warn("remove from cart action", action);
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];

    case EMPTY_CART:
      console.warn("empty cart action", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
