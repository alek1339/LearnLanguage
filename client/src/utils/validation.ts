import { ISentence } from "../types/Sentence";

export const isLength = (value: string, options: { min?: number; max?: number }) => {
  const { min, max } = options;
  if (min && value.length < min) {
    return false;
  }
  if (max && value.length > max) {
    return false;
  }
  return true;
};

export const isValidHttpUrl = (value: string) => {
  let url;
  try {
    url = new URL(value);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

export const isValidSentence = (sentence: ISentence) => {
  if (!sentence.english && typeof sentence.english !== 'string') return false;
  if (!sentence.german && typeof sentence.german !== 'string') return false;
  if (!sentence.commonWords && !Array.isArray(sentence.commonWords)) return false;

  return true;
}