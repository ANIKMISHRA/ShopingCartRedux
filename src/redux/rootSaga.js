// Package
import { fork } from "redux-saga/effects"

// Components
import productSaga from "./productSaga"
import authSaga from "./authSaga"

// Generator function
export default function* rootSaga() {
    yield fork(productSaga)
    yield fork(authSaga)
  }