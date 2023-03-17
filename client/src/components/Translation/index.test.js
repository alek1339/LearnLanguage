import { shallow } from 'enzyme';
import React from 'react';
import Translation from '.';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Translation', () => {
  const initialState = {
    translation: {
      translation: 'test',
      language: 'en',
      languages: ['en', 'es'],
      loading: false,
      error: null
    }
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <Translation />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});