import React, { useEffect, useState, ChangeEvent } from 'react';
import { Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from '../../store';
import { ITranslation } from "./types";
import { setCurrentTranslation } from "../../actions/practice/practiceSentencesActions";
import PracticeBtns from '../PracticeBtns';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';


const Translation: ITranslation = ({ onSubmit, onContinue, showContinue }) => {
  const dispatch = useAppDispatch();
  const [translationInput, setTranslationInput] = useState('');
  const currentSentence: ISentence = useSelector((state: RootState) => state.practiceSentence);

  useEffect(() => {
    setTranslationInput('');
  }, [currentSentence]);

  const onFormChange = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  }

  const handleOnContinue = () => {
    onContinue();
    setTranslationInput('');
  }

  const handleTranslationChange = (e: any) => {
    setTranslationInput(e);
    dispatch(setCurrentTranslation(e));
  }

  return (
    <Row>
      <Form>
        <Form.Group className="mb-3 d-flex justify-content-center" controlId="exampleForm.ControlTextarea1">
          <Form.Control value={translationInput} className="txt-area" onKeyPress={onFormChange} onChange={(e) => handleTranslationChange(e.target.value)} placeholder="Type in German" as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center">
        <PracticeBtns showContinue={showContinue} onContinue={handleOnContinue} onSubmit={onSubmit} />
      </div>
    </Row>
  );
}

export default Translation;
