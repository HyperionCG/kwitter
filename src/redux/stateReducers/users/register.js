import { REGISTER } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const register = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(REGISTER, register);

// const getInitStateFromStorage = (key, initialState) => {
//   const storedState = JSON.parse(localStorage.getItem(key));

//   if (storedState) {
//     const unchangedInitialStateProps =
//       Object.keys(storedState).every(
//         property => initialState[property] !== undefined
//       ) &&
//       Object.keys(initialState).every(
//         property => storedState[property] !== undefined
//       );
//     if (unchangedInitialStateProps) {
//       return storedState;
//     }
//   }
//   return initialState;
// };

// const register = (
//   state = getInitStateFromStorage("register", initialState),
//   action
// ) => {
//   switch (action.type) {
//     case REGISTER.SUCCESS:
//       return { ...initialState };
//     default:
//       return state;
//   }
// };
// test
