import { ILesson } from "../types/Lesson"

export const allSentencesHasAudioCheck = (lesson: ILesson) => {
  for (let i = 0; i < lesson.sentences.length; i++) {
    if (!lesson.sentences[i].audio || lesson.sentences[i].audio === "") {
      return false;
    }
  }
  return true;
}