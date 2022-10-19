import { ADD_PRODUCT, PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

export const addingProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};
export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
