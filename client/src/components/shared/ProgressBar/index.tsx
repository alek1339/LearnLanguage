import React, { useEffect, useState, useRef } from "react";
// import ProgressBar from "react-bootstrap/esm/ProgressBar";
import { ICustomProgressBar } from "./types";
import { ProgressBar, ProgressBarContainer } from './styles';

const CustomProgressBar: ICustomProgressBar = ({ progress, width, progressStep, color }) => {

  return (
    // <ProgressBar variant="success" now={progress} />
    <ProgressBarContainer width={`${width}px`}>
      <ProgressBar width={width} progress={progress} progressStep={progressStep} color={color}></ProgressBar>
    </ProgressBarContainer>
  )
}

export default CustomProgressBar;