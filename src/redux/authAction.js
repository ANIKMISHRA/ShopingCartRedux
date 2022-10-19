import { EDIT_USER, LOGIN_USER, REGISTER_USER } from "./constant";

export const registerUser = (data) => {
    return {
      type: REGISTER_USER,
      payload: data,
    };
  };

  export const loginUser = () => {
    return {
      type: LOGIN_USER,
    };
  };

  export const editUserProfile = () => {
    return {
      type: EDIT_USER,
    };
  };



  // export const registerUser = (userData) => {
  //   return (dispatch) => {
  //     axios.post('http://localhost:8000/register', {userData})
  //     .then(response => {
  //       console.log(response);
  //       dispatch({
  //         type: REGISTER_USER,
  //         payload: response.data,
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }
  // };