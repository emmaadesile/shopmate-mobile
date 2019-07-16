// import {
//   GET_TOKEN,
//   GET_TOKEN_ERROR,
//   SAVE_TOKEN,
//   SAVE_TOKEN_ERROR,
//   REMOVE_TOKEN
// } from "../actions/authAction";

// const initialState = {
//   userToken: "",
//   error: ""
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_TOKEN:
//       return {
//         ...state,
//         token: action.payload
//       };

//     case GET_TOKEN_ERROR:
//       return {
//         ...state,
//         error: action.error
//       };

//     case SAVE_TOKEN:
//       return {
//         ...state,
//         userToken: action.payload
//       };

//     case SAVE_TOKEN_ERROR:
//       return {
//         ...state,
//         error: action.error
//       };

//     case REMOVE_TOKEN:
//       return {
//         ...state,
//         userToken: action.payload
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
