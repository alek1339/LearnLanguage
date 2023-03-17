import React from "react";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import { ICustomProgressBar } from "./types";

const CustomProgressBar: ICustomProgressBar = ({ progress }) => {

  return (
    <ProgressBar variant="success" now={progress} />
  )
}

export default CustomProgressBar;