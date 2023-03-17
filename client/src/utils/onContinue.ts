import { Dispatch } from "react";
import { setCurrentSentence } from "../actions/practice/practiceSentencesActions";
import { ILesson } from "../types/Lesson";
import { ISentence } from "../types/Sentence";

interface IOnContinue {
  forTranslation: ISentence[];
  setIndexForTranslation: (index: number) => void;
  indexForTranslation: number;
  currentLesson: ILesson;
  dispatch: Dispatch<any>;
  setTranslation: (translation: string) => void;
  setShowContinue: (show: boolean) => void;
  setCurrentSentence: (sentence: ISentence) => void;
}

const onContinue = ({
  forTranslation,
  setIndexForTranslation,
  indexForTranslation,
  currentLesson,
  dispatch,
  setTranslation,
  setShowContinue,
  setCurrentSentence
}: IOnContinue) => {
  let nextIndex = indexForTranslation >= forTranslation.length && forTranslation.length !== 0 ? 0 : indexForTranslation + 1;

  setIndexForTranslation(nextIndex);
  const sentences = forTranslation.length > 0 ? forTranslation : currentLesson.sentences;
  if (nextIndex < sentences.length) {
    dispatch(setCurrentSentence(sentences[nextIndex]));
  } else {
    setIndexForTranslation(0);
  }
  setTranslation('');
  setShowContinue(false);
}

export default onContinue;