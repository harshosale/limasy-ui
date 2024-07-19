import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("TOKEN") || undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOKEN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
