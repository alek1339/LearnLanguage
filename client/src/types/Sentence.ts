export type ISentence = {
  english: string,
  german: string,
  german2?: string,
  german3?: string,
  bulgarian?: string,
  img?: string,
  correctStrike?: number,
  startLearn?: Date,
  lastPracticed?: Date,
  audio?: string,
  commonWords: Array<string>,
  germanWithHiddenPart?: string;
  _id?: string,
}

export const ISentenceInitialState: ISentence = {
  english: "",
  german: "",
  german2: "",
  german3: "",
  bulgarian: "",
  img: "",
  correctStrike: 0,
  startLearn: new Date(),
  lastPracticed: new Date(),
  audio: "",
  commonWords: [],
  germanWithHiddenPart: "",
}
