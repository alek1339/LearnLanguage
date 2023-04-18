import React from "react";
import { Button } from "react-bootstrap";
import { IPracticeBtns } from "./types";

const PracticeBtns: IPracticeBtns = ({ showContinue, onContinue, onSubmit, submitBtnRef, continueBtnRef }) => {
  return (
    <>
      {showContinue ?
        <Button ref={continueBtnRef ? continueBtnRef : null} onClick={onContinue} type="submit" className="">Continue</Button> :
        <Button ref={submitBtnRef ? submitBtnRef : null} onClick={onSubmit} type="submit" className="bg-success">Check</Button>}
    </>
  );
};

export default PracticeBtns