import React, { useState, useEffect, ChangeEvent } from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from '../../store';

import { fetchWords } from "../../actions/wordsActions";
import { fetchSentences } from "../../actions/sentencesActions";
import { RootState } from "../../reducers";
import { IWord } from "../../types/Word";
import { ISentence } from "../../types/Sentence";
import { isLength, isValidHttpUrl, isValidSentence } from "../../utils/validation";
import { LanguageLevels } from "../../enums/languageLevels";
import List from "../../components/List";
import useFormInputs from "../../hooks/useFormInputs";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import { ILessonForm } from "./types";
import InputSelect from "../InputSelect";

const LessonForm: ILessonForm = ({ lesson, onSubmit }) => {
  const dispatch = useAppDispatch();
  const [showLevelsOpts, setShowLevelsOpts] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string>();
  const { inputs, handleInputChange, resetInputs, setNewInputValues } = useFormInputs({
    initialValues:
    {
      textLesson: '',
      lessonName: '',
      videoLesson: '',
      sentenceInput: '',
      lessonPart: ''
    },
    onSubmit: () => { }
  });
  const [addedWords, setAddedWords] = useState<Array<string>>([]);
  const [lessonNameError, setLessonNameError] = useState('');
  const [videoLessonError, setVideoLessonError] = useState('');
  const [selectedLevel, setSelectedLevel] = useState("Level");
  const words = useSelector((state: RootState) => state.words);
  const [filteredWords, setFilteredWords] = useState<Array<IWord>>([]);
  const [wordInput, setWordInput] = useState("");
  const sentences = useSelector((state: RootState) => state.sentences);
  const [filteredSentences, setFilteredSentences] = useState<Array<ISentence>>([]);
  const [selectedSentence, setSelectedSentence] = useState<string>("");
  const [addedSentences, setAddedSentences] = useState<Array<string>>([]);

  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchWords());
    dispatch(fetchSentences());
  }, []);

  useEffect(() => {
    if (lesson) {
      setNewInputValues({
        lessonName: lesson.lessonName,
        videoLesson: '',
        textLesson: lesson.textLesson ? lesson.textLesson : '',
        lessonPart: lesson.part ? lesson.part : '',
        sentenceInput: ""
      });
      setAddedWords(lesson.words || []);

      const sentences: Array<string> = [];

      if (lesson.sentences) {
        lesson.sentences.forEach((s) => {
          return sentences.push(s.german);
        });
      }

      setAddedSentences(sentences);

      if (lesson.level) {
        setSelectedLevel(lesson.level);
      }
    }
  }, [lesson]);

  const onWordInputChange = (e: ChangeEvent<any>) => {
    setFilteredWords([]);
    setSelectedWord(e.target.value);
    setWordInput(e.target.value);

    if (words.length > 0) {
      setFilteredWords(
        words.filter((w) =>
          w.german.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
    }
  };

  const addWord = () => {
    if (selectedWord && selectWord.length > 0) {
      setAddedWords((prevArr) => [...prevArr, selectedWord]);
      setWordInput("");
    }
  };

  const removeWord = (word: string) => {
    setAddedWords(addedWords.filter((w) => w !== word));
  };

  const selectWord = (word: string) => {
    setSelectedWord(word);
    setFilteredWords([]);
  };

  const onSentenceInputChange = (e: ChangeEvent<any>) => {
    setFilteredSentences([]);
    setSelectedSentence(e.target.value);
    handleInputChange(e);

    if (sentences.length > 0) {
      setFilteredSentences(
        sentences.filter((w) =>
          w.german.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
    }
  };

  const addSentence = () => {
    if (selectedSentence && selectSentence.length > 0) {
      setAddedSentences((prevArr) => [...prevArr, selectedSentence]);
      handleInputChange({ target: { name: "sentenceInput", value: "" } } as ChangeEvent<any>);
    }
  };

  const removeSentence = (sentence: string) => {
    setAddedSentences(addedSentences.filter((s) => s !== sentence));
  };

  const selectSentence = (sentance: string) => {
    setSelectedSentence(sentance);
    handleInputChange({ target: { name: "sentenceInput", value: sentance } } as ChangeEvent<any>);
    setFilteredSentences([]);
  };

  const selectLevel = (level: string) => {
    setSelectedLevel(level);
    setShowLevelsOpts(false);
  };

  const handleLessonNameChange = (e: ChangeEvent<any>) => {
    if (isLength(e.target.value, { min: 3, max: 30 })) {
      setLessonNameError('');
    } else {
      setLessonNameError('Lesson name must be between 3 and 30 characters');
    }
    handleInputChange(e);
  };

  const handleVideoLessonChange = (e: ChangeEvent<any>) => {
    if (isValidHttpUrl(e.target.value)) {
      setVideoLessonError('');
    } else {
      setVideoLessonError('Please enter a valid URL');
    }
    handleInputChange(e);
  };

  const handleOnSubmit = () => {
    const sentenceArrObjs: Array<any> = [];
    addedSentences.forEach((added) => {
      const matchSentence: ISentence | undefined = sentences.find((s) => s.german === added);

      if (matchSentence && isValidSentence(matchSentence)) {
        sentenceArrObjs.push(matchSentence);
      }
    });

    const updatedLesson = {
      textLesson: DOMPurify.sanitize(value),
      level: selectedLevel,
      words: addedWords,
      sentences: sentenceArrObjs,
      lessonName: inputs.lessonName,
      videoLesson: inputs.videoLesson,
      part: inputs.lessonPart
    };

    resetInputs();
    setAddedSentences([]);
    setAddedWords([]);

    onSubmit(updatedLesson);
  };

  return (
    <div className="lesson-form-container">
      <div>
        <div className="grid mb-32 level-row">
          <div className="inputs-container">
            <input
              id="lesson-name"
              placeholder="Lesson Name"
              name="lessonName"
              value={inputs.lessonName}
              onChange={(e) => handleLessonNameChange(e)}
            />
            <span>{lessonNameError}</span>
          </div>

          <div className="inputs-container">
            <input
              id="lesson-part"
              placeholder="Lesson Part"
              name="lessonPart"
              value={inputs.lessonPart}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div
            className="level-select"
            onClick={() => setShowLevelsOpts(!showLevelsOpts)}
          >
            <span className="pl-15">{selectedLevel}</span>
          </div>
          <div></div>
          {showLevelsOpts ? (
            <div>
              <ul>
                {LanguageLevels.map((level) => {
                  return (
                    <li key={level} onClick={() => selectLevel(level)}>
                      {level}
                    </li>
                  );
                })
                }
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="grid mb-32 words-row inputs-container">
          <input
            id="lesson-video"
            name="videoLesson"
            value={inputs.videoLesson}
            onChange={(e) => handleVideoLessonChange(e)}
            placeholder="Add a video link"
          />
          <span>{videoLessonError}</span>
        </div>

        <div className="grid mb-32 words-row">
          <input
            id="word-input"
            onChange={(e) => onWordInputChange(e)}
            value={selectedWord}
          />
          <div>
            {filteredWords.length > 0 && wordInput.length > 0 ? (
              <div className="dropdown">
                <List onClick={selectWord} elements={filteredWords.map(w => w.english)} className='' />
              </div>
            ) : (
              ""
            )}
          </div>
          <label
            htmlFor="word-input"
            className="primary-btn"
            onClick={() => addWord()}
          >
            Add a word
          </label>

        </div>

        <div className="grid mb-32">
          <InputSelect
            onInputChange={(e: any) => onSentenceInputChange(e)}
            inputs={inputs}
            filtered={filteredSentences}
            onSelect={selectSentence}
          />
          <label
            htmlFor="word-input"
            className="primary-btn"
            onClick={() => addSentence()}
          >
            Add a Sentence
          </label>
        </div>

        <div>
          <div>
            Words:
            {addedWords.length > 0 ? (
              <ul>
                {addedWords.map((word, i) => {
                  return (
                    <li key={i}>
                      {word}{" "}
                      <span
                        onClick={() => removeWord(word)}
                        className="text-red"
                      >
                        X
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>

          <ReactQuill theme="snow" value={value} onChange={setValue} />

          <div>
            Sentences:
            {addedSentences.length > 0 ? (
              <ul>
                {addedSentences.map((sentence, i) => {
                  return (
                    <li key={i}>
                      {sentence}{" "}
                      <span
                        onClick={() => removeSentence(sentence)}
                        className="text-red"
                      >
                        X
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex mt-260 space-between mb-32 mt-120">
          <button className="secondary-btn">Back</button>
          <button className="primary-btn" onClick={handleOnSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default LessonForm;