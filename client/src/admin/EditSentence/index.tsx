import React, { useEffect } from 'react';
import SentenceForm from '../SentenceForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { ISentence } from '../../types/Sentence';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { fetchSentence, updateSentence } from '../../actions/sentencesActions';

const EditSentence = () => {
  const dispatch = useAppDispatch();
  const { _id } = useParams();
  const sentence: ISentence = useSelector((state: RootState) => state.sentence);
  const navigate = useNavigate();

  useEffect(() => {
    if (_id) {
      dispatch(fetchSentence(_id))
    }
  }, [_id]);

  const onSubmit = (newSentence: ISentence) => {
    if (_id) {
      dispatch(updateSentence(_id, newSentence));
    }
    navigate('/admin');
  };

  return (
    <div>
      <SentenceForm onSubmit={onSubmit} sentence={sentence} />
    </div>
  )
}

export default EditSentence;