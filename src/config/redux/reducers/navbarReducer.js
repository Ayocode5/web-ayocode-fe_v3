import { createSlice } from "@reduxjs/toolkit";
import { getEnLanguage, getIdLanguage } from "../../../utils/Data.js";

const getLanguageFromLocalStorage = () => {
  const language = localStorage.getItem("lang");
  if (language === "Ind") {
    return getIdLanguage();
  } else {
    return getEnLanguage();
  }
};

const initialState = {
  isOpen: false,
  switchChecked: localStorage.getItem("lang")
    ? localStorage.getItem("lang") === "Ind"
      ? true
      : false
    : localStorage.setItem("lang", "Eng"),
  dataLanguage: localStorage.getItem("lang")
    ? getLanguageFromLocalStorage()
    : localStorage.setItem("lang", "Eng"),
};

export const navbarReducer = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleHamburger: (state) => {
      state.isOpen = !state.isOpen;
      if (state.isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
    toggleLanguage: (state) => {
      state.switchChecked = !state.switchChecked;

      if (state.switchChecked) {
        state.language = "Ind";
        localStorage.setItem("lang", "Ind");
        state.dataLanguage = getIdLanguage();
      } else {
        state.language = "Eng";
        localStorage.setItem("lang", "Eng");
        state.dataLanguage = getEnLanguage();
      }
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
      if (state.isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
  },
});
// console.log(navbarReducer.reducer);
export const { toggleHamburger, toggleLanguage, setIsOpen } =
  navbarReducer.actions;
export default navbarReducer.reducer;
