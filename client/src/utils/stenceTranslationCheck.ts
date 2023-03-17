import { LessonsProgress } from '../enums/lessonsProgress';
import { ISentence } from '../types/Sentence'

interface ITranslation {
  translation: string
}

export const sentenceTraslationCheck = (sentence: ISentence, translation: ITranslation, correctStrike: number) => {
  const german = sentence.german
    .replace(/[!,.?@#$%^&*(){}"':<>/]/g, '')
    .trim()
    .toLowerCase();

  const german2 = sentence.german2 ? sentence.german2
    .replace(/[!,.?@#$%^&*(){}"':<>/]/g, '')
    .trim()
    .toLowerCase() : '';

  const german3 = sentence.german3 ? sentence.german3
    .replace(/[!,.?@#$%^&*(){}"':<>/]/g, '')
    .trim()
    .toLowerCase() : '';

  const translationInput = translation.translation
    .replace(/[!,.?@#$%^&*(){}"':<>/]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  if (translationInput === '') return false;

  if (LessonsProgress.secondLevel > correctStrike) {
    return german.trim() === translationInput.trim() ||
      german2 === translationInput || german3 === translationInput;
  }
  else {
    return compareSentences(german.trim(), translationInput.trim()) ||
      compareSentences(german2.trim(), translationInput.trim()) ||
      compareSentences(german3.trim(), translationInput.trim());
  }
}

export const compareSentences = (sentence: string, translation: string) => {
  let sentenceArray: Array<string> = sentence.split(' ');
  let translationArray: Array<string> = translation.split(' ');
  let numberOfMistakes: number = 0;
  let numberOfMistakesInWord: number = 0;
  const allowedMistakesInSentence: number = 2;
  const allowedMistakesInWord: number = 1;
  let mistakesAreLessThanAllowed: boolean = true;

  if (sentenceArray.length !== translationArray.length || sentence === '' || translationArray.length === 0) {
    mistakesAreLessThanAllowed = false;
    return;
  }

  for (let sentenceLegnth = 0; sentenceLegnth < sentenceArray.length - 1; sentenceLegnth++) {
    numberOfMistakesInWord = 0;
    for (let wordLegth = 0; wordLegth < sentenceArray[sentenceLegnth].length - 1; wordLegth++) {
      if (sentenceArray[sentenceLegnth][wordLegth] !== translationArray[sentenceLegnth][wordLegth]) {
        numberOfMistakes++;
        numberOfMistakesInWord++;
      }

      if (numberOfMistakesInWord > allowedMistakesInWord) {
        mistakesAreLessThanAllowed = false;
        return;
      }
    }
  }

  if (numberOfMistakes > allowedMistakesInSentence) {
    mistakesAreLessThanAllowed = false;
    return;
  }
  return mistakesAreLessThanAllowed;
}