import React from "react";
import { Button } from "react-bootstrap";
import { IPracticeBtns } from "./types";

import './styles.scss';

const PracticeBtns: IPracticeBtns = ({ showContinue, onContinue, onSubmit, submitBtnRef, continueBtnRef }) => {
  return (
    <>
      {showContinue ?
        <Button ref={continueBtnRef ? continueBtnRef : null} onClick={onContinue} type="submit" className="submit-btn">Continue</Button> :
        <Button ref={submitBtnRef ? submitBtnRef : null} onClick={onSubmit} type="submit" className="submit-btn">Check</Button>}
    </>
  );
};

export default PracticeBtns