import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects'
import Swal from 'sweetalert2';
import { registerUser } from './authAction';
import { EDIT_USER, LOGIN_USER, REGISTER_USER, SET_USERS, USER_DATA } from './constant';


const user_id = localStorage.getItem('id')


async function addData(payload) {
    try {
      const response = await axios.post('http://localhost:8000/register', payload);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
function* userRegister({ payload }) {
    try {
        const data = yield call(addData, payload);
        yield put(registerUser(data));
        Swal.fire({ position:'top-right',  icon: 'success', title: 'Successfully Registered', timer: 2500 });
      } catch (error) {
        console.log(error);
      }
  }

  function* userLogin() {
    let data = yield fetch("http://localhost:8000/register");
    data = yield data.json();
  
    yield put({ type: SET_USERS, data });
  }

  function* editUserProfile() {
    let data = yield fetch(`http://localhost:8000/register/${user_id}`);
    data = yield data.json();
  
    yield put({ type: USER_DATA, data });
  }



function* authSaga () {
    yield takeEvery(REGISTER_USER, userRegister);
    yield takeEvery(LOGIN_USER, userLogin);
    yield takeEvery(EDIT_USER, editUserProfile)
}
export default authSaga;