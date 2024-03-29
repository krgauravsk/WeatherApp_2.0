import React from "react";

//For Icons-Search-library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

const Input = (props) => (
  <div className="form">
    <input
      className="input"
      placeholder="Type your location..."
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      required
    />
    <button type="submit" className="btn" onClick={props.onClick}>
      <FontAwesomeIcon
        className="icon"
        size="lg"
        icon={faSearch}
        fixedWidth
      ></FontAwesomeIcon>
    </button>
  </div>
);

export default Input;
