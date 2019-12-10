const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

//auth
export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");

//users
export const GETUSER = createActionTypes("GETUSER");
export const REGISTER = createActionTypes("REGISTER");
export const DELETEUSER = createActionTypes("DELETEUSER");
export const UPLOADPROFILEIMG = createActionTypes("UPLOADPROFILEIMG");

//messages
export const GETMESSAGES = createActionTypes("GETMESSAGES");
export const POSTMESSAGE = createActionTypes("POSTMESSAGE");
export const DELETEMESSAGE = createActionTypes("DELETEMESSAGE");

//likes
export const ADDLIKE = createActionTypes("ADDLIKE");
export const REMOVELIKE = createActionTypes("REMOVELIKE");
