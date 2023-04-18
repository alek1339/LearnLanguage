import React from "react";
import { Button } from "react-bootstrap";
import { IPracticeBtns } from "./types";

const PracticeBtns: IPracticeBtns = ({ showContinue, onContinue, onSubmit, buttonRef }) => {
  return (
    <>
      {showContinue ?
        <Button onClick={onContinue} type="submit" className="">Continue</Button> :
        <Button ref={buttonRef ? buttonRef : null} onClick={onSubmit} type="submit" className="bg-success">Check</Button>}
    </>
  );
};

export default PracticeBtns