import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";
import Swal from "sweetalert2";
import { ADD_PRODUCT, PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";
import { addingProduct } from "./productAction";

async function addedProduct(payload) {
  console.log("payload", payload);
  try {
    const response = await axios.post('http://localhost:8000/product', payload);
    const result = await response.json(payload);
    return result;
  } catch (error) {
    throw error;
  }
}

function* addProduct({payload}) {
  try {
    const data = yield call(addedProduct, payload);
    yield put(addingProduct(data));
    Swal.fire({ position:'top-right',  icon: 'success', title: 'Successfully Added', timer: 2500 });
  } catch (error) {
    console.log(error);
  }
}

function* getProducts() {
  let data = yield fetch("http://localhost:8000/product");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:8000/product?q=${data.query}`);
  result = yield result.json();
  console.log("DAta", data);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(ADD_PRODUCT, addProduct);
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}
export default productSaga;
