import profileReducer from './profileReducer';

describe('profileReducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual({
      firstName: '', lastName: '', user_id: ''
    });
  });
});
