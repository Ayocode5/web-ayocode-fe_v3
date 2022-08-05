import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../../../../config/redux/reducers/navbarReducer";

import "./ToggleSwitch.modules.scss";

export default function ToggleSwitch() {
  const { switchChecked } = useSelector((state) => state.navbar);

  const dispatch = useDispatch();
  return (
    <div className="toggle-switch-lang">
      <input
        onChange={() => dispatch(toggleLanguage())}
        className="toggle-switch-lang__checkbox"
        type="checkbox"
        id="chk"
      />

      <label className="toggle-switch-lang__label" htmlFor="chk">
        <div
          className={`toggle-switch-lang__ball ${
            switchChecked ? "switch-to-id" : ""
          }`}
        ></div>
        <div className="toggle-switch-lang__flags">
          <img
            className="ball-id toggle-switch-lang__flag"
            src="./images/icons/flags/flag-indonesia.svg"
            alt="id flag"
          />
          <img
            className="ball-us toggle-switch-lang__flag"
            src="./images/icons/flags/flag-us.svg"
            alt="us flag"
          />
        </div>
      </label>
    </div>
  );
}
