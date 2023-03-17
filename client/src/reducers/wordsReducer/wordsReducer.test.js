import wordsReducer from "./wordsReducer";
import { SET_WORDS } from "../../enums/actionTypes";

describe("wordsReducer", () => {
  const initialState = [{ english: "", german: "" }];
  it("should return the initial state", () => {
    expect(wordsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_WORDS", () => {
    const words = [{ english: 'test e', german: 'test g' }];
    const action = {
      type: SET_WORDS,
      payload: words
    };
    expect(wordsReducer(initialState, action)).toEqual(words);
  });
});