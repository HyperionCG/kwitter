import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { REGISTER } from "../actionTypes";

const url = domain + "/register";

export const register = registerData => dispatch => {
  dispatch({
    type: REGISTER.START
  });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: REGISTER.FAIL, payload: err }));
    });
};
