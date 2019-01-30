// @flow

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './App.css';

import {Content} from './components/Content';
import {ASPECT_RATIO} from './utils/const';
import {ResizeContainer} from './components/ResizeContainer';
import {store} from './redux/store';

/*
TODO:
Application gets workout state update from server every 500ms in following format: {
"duration": 9.2, "duration_countdown": 3590.8, "calories": 0.66,
"speed": 4.82,
"grade": 0.0,
"heart_rate": 127.0,
"pace": 12.42,
"distance": 1.2,
}
duration - time since workout started (in seconds), increases by 0.5 with every sample duration_countdown - workout time remaining (seconds), decreases by 0.5 with every sample
speed - (kph)
grade (%)
heart_rate (bpm)
pace (min/km)
distance - distance passed since workout start (km)
For test project set up a client-side mock that uses interval timer to simulate 30 minute workout with constant speed 9 kph, and calories burn rate to be 0.1875 cal/sec.

Two instances of application opened in two tabs of the same browser should sync page
location and entertainment video selection.
i.e navigating to entertainment view tab in app instance 1 switches app instance 2 to entertainment view as well
 */

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

export default App;
