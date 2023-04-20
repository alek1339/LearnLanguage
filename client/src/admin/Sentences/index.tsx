import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { fetchSentences } from '../../actions/sentencesActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { ISentence } from '../../types/Sentence';
import InputSelect from '../InputSelect';
import { useNavigate } from 'react-router-dom';
import useFormInputs from '../../hooks/useFormInputs';

const Sentences = () => {
  const dispatch = useAppDispatch();
  const sentences = useSelector((state: RootState) => state.sentences);
  const [filteredSentences, setFilteredSentences] = useState<Array<ISentence>>([]);

  const { inputs, handleInputChange } = useFormInputs({
    initialValues: {
      sentenceInput: ''
    },
    onSubmit: () => { }
  });
  const navigate = useNavigate();


  const onSelect = (e: any) => {
    console.log(e)

    const selectedSentence = sentences.find((s) => s.german === e);
    const id = selectedSentence?._id || '';
    navigate(`/admin/edit-sentence/${id}}`);
  }

  useEffect(() => {
    dispatch(fetchSentences());
  }, [dispatch]);

  const onInputChange = (e: any) => {
    handleInputChange(e);
    setFilteredSentences([]);

    if (sentences.length > 0) {
      setFilteredSentences(
        sentences.filter((w) =>
          w.german.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
    }
  };


  return (
    <div>
      <h1>Sentences</h1>
      <InputSelect
        onSelect={(e: any) => onSelect(e)}
        filtered={filteredSentences}
        inputs={inputs}
        onInputChange={onInputChange}
      />

    </div>
  )
}

export default Sentences;