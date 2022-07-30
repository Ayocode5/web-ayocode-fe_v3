import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHamburger } from "../../config/redux/reducers/navbarReducer";

export default function Hamburger() {
  const { isOpen } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(toggleHamburger())}
      className={`hamburger ${isOpen ? "open" : ""}`}
      aria-expanded={isOpen}
      aria-controls="menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
