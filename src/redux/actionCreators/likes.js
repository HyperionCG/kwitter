import { handleJsonResponse, jsonHeaders, domain } from "./constants";
import { ADDLIKE, REMOVELIKE } from "../actionTypes";
import { getMessages } from ".";

const url = domain + "/likes";

export const toggleLike = messageId => (dispatch, getState) => {
  const username = getState().auth.login.result.username;
  const messages = getState().messages.getMessages.result.messages;
  const message = messages.find(message => message.id === messageId);
  const like = message.likes.find(like => like.username === username);
  if (like) {
    return dispatch(removeLike(like.id));
  }
  return dispatch(addLike(messageId));
};

export const _addLike = messageId => (dispatch, getState) => {
  dispatch({
    type: ADDLIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ messageId })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADDLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKE.FAIL, payload: err }));
    });
};

export const addLike = messageId => (dispatch, getState) => {
  return dispatch(_addLike(messageId)).then(() => {
    const username = getState().auth.login.result.username;
    const pathname = getState().router.location.pathname;
    if (pathname === "/Newsfeed") {
      return dispatch(getMessages());
    }
    return dispatch(getMessages(username));
  });
};

export const _removeLike = likeId => (dispatch, getState) => {
  dispatch({
    type: REMOVELIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + likeId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REMOVELIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: REMOVELIKE.FAIL, payload: err }));
    });
};

export const removeLike = likeId => (dispatch, getState) => {
  return dispatch(_removeLike(likeId)).then(() => {
    const username = getState().auth.login.result.username;
    const pathname = getState().router.location.pathname;
    if (pathname === "/Newsfeed") {
      return dispatch(getMessages());
    }
    return dispatch(getMessages(username));
  });
};
