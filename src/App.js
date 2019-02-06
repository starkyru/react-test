// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import { Content } from './components/Content';
import { ASPECT_RATIO } from './core/const';
import { ResizeContainer } from './components/ResizeContainer';
import { store } from './redux/store';

class App extends Component<void, void> {
  render() {
    return (
      <Provider store={store}>
        <ResizeContainer className="App" aspectRatio={ASPECT_RATIO}>
          <Content />
        </ResizeContainer>
      </Provider>
    );
  }
}

export { App };
