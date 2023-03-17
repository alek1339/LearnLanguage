import { ILesson } from "../types/Lesson";
import { ISentence } from "../types/Sentence";

interface IupdateProgressProps {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setPercentageProgress: React.Dispatch<React.SetStateAction<number>>;
  currentLesson: ILesson;
  correctSentences: ISentence[];
  setCorrectSentences: React.Dispatch<React.SetStateAction<ISentence[]>>;
  currentSentence: ISentence;
}

interface IupdateProgress {
  (props: IupdateProgressProps): ISentence[];
}

const updateProgress: IupdateProgress = ({
  progress,
  setCorrectSentences,
  correctSentences,
  currentSentence,
  currentLesson,
  setProgress,
  setPercentageProgress
}) => {
  const updateProgress = progress + 1;
  const updatedCorrectSentences = [...correctSentences, currentSentence];
  setCorrectSentences(updatedCorrectSentences)

  setProgress(updateProgress)
  const percentage = updateProgress / currentLesson.sentences.length * 100
  setPercentageProgress(percentage);

  return updatedCorrectSentences;
}

export default updateProgress;