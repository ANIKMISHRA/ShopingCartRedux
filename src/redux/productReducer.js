import { ADD_PRODUCT, SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
        console.warn("ADD Product action  CALLING", action);
        return [
          ...data,
            action.payload
        ];
    case SET_PRODUCT_LIST:
      console.warn("product List action", action);
      return [...action.data];
    default:
      return data;
  }
};
