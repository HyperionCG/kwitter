import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { LOGIN, LOGOUT } from "../actionTypes";

const url = domain;

export const login = loginData => dispatch => {
  dispatch({
    type: LOGIN.START
  });

  return fetch(url + "/auth/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: LOGIN.FAIL, payload: err }));
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/auth/logout", {
    method: "GET",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      if (err.statusCode === 401) {
        return dispatch({ type: LOGOUT.SUCCESS, payload: { statusCode: 200 } });
      }
      return Promise.reject(
        dispatch({ type: LOGOUT.FAIL, payload: err.message })
      );
    });
};

// export const register = registerData => dispatch => {
//   dispatch({
//     type: REGISTER.START
//   });

//   return fetch(url + "/users", {
//     method: "POST",
//     headers: jsonHeaders,
//     body: JSON.stringify(registerData)
//   })
//     .then(handleJsonResponse)
//     .then(result => {
//       return dispatch({
//         type: REGISTER.SUCCESS,
//         payload: result
//       });
//     })
//     .catch(err => {
//       return Promise.reject(dispatch({ type: REGISTER.FAIL, payload: err }));
//     });
// };
