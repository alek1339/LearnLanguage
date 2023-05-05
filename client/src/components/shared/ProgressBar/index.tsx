import React, { useEffect, useState, useRef } from "react";
// import ProgressBar from "react-bootstrap/esm/ProgressBar";
import { ICustomProgressBar } from "./types";
import { ProgressBar, ProgressBarContainer } from './styles';

const CustomProgressBar: ICustomProgressBar = ({ progress, width, progressStep, color }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const percentageFromScreenWidth = 62.5;

  useEffect(() => {
    console.log('progress', window.innerWidth);
    if (width) {
      setContainerWidth(width)
    } else {
      // Width of the progress bar container is 62.5% of the window width
      setContainerWidth(window.innerWidth * (percentageFromScreenWidth / 100));
    }
  }, [])

  return (
    // <ProgressBar variant="success" now={progress} />
    <ProgressBarContainer width={`${containerWidth}px`}>
      <ProgressBar width={containerWidth} progress={progress} progressStep={progressStep} color={color}></ProgressBar>
    </ProgressBarContainer>
  )
}

export default CustomProgressBar;