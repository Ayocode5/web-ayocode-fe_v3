import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navbarReducer";

const rootReducer = () => ({
  navbar: navbarReducer,
});

export default configureStore({
  reducer: rootReducer(),
});
