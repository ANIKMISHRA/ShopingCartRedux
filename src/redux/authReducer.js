import { REGISTER_USER, SET_USERS, USER_DATA} from "./constant";

const initialState = {
  users: [],
  editUser:{}
}

export const authData = (data = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER:
        console.warn("register user action  CALLING", action);
        return {
          ...data,
          users: [
            {...action.payload}
          ],
        };

      case SET_USERS:
        console.log("SET Users action calling", action);
        return [...action.data]

        case USER_DATA:
          console.log("USER DATA action calling", action);
          return {
            ...data ,
            editUser: action.data
          };
          
        default:
          return data;
    }
  };