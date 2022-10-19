// NPM Package
import Swal from "sweetalert2";

/**
 * Method to handle the Error Message before login.
 */
export const ErrorMessages = () => {
    if(!localStorage.getItem("email") && !localStorage.getItem("password")) {
        Swal.fire({ icon: 'error', title: 'You need to login first, no login user found', color: 'red', timer: 3000, showConfirmButton: false });
      }
}