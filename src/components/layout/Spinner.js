import React, { Fragment } from "react";
import spinnerGif from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinnerGif}
        alt="Loaing..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
