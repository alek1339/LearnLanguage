import { sentenceTraslationCheck } from "./stenceTranslationCheck";

describe('sentenceTranslationCheck', () => {
  it('should return true if translation is correct', () => {
    const sentence = {
      german: 'Hallo',
      german2: '',
      german3: '',
      commonWords: ['Hallo', 'Guten Tag', 'Guten Morgen'],
      english: 'Hello',
    }
    const translation = {
      translation: 'Hallo',
    }
    // expect(sentenceTraslationCheck(sentence, translation)).toBe(true);
  });
  it('should return false if translation is incorrect', () => {
    const sentence = {
      german: 'Hallo',
      german2: '',
      german3: '',
      commonWords: ['Hallo', 'Guten Tag', 'Guten Morgen'],
      english: 'Hello',
    }
    const translation = {
      translation: 'Halloo',
    }
    // expect(sentenceTraslationCheck(sentence, translation)).toBe(false);
  });
});