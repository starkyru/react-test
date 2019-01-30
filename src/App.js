// @flow

import React, {Component} from 'react';

import './App.css';
import {TabContainer} from './components/TabContainer';
import {Tabbar} from './components/Tabbar';
import type {Tab} from './components/Tabbar';

type State = {
  width: number,
  height: number,
  selectedTab: Tab,
}

const ASPECT_RATIO = 1024 / 600;

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

 */

class App extends Component<void, State> {
  state = {
    width: 1,
    height: 1,
    selectedTab: 'dashboard',
  };
  updateDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight || 1;

    this.setState({width: width, height: height});
  };

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  handleTabbarClick = (id: Tab) => {
    this.setState({selectedTab: id});
  };

  render() {
    const {width, height, selectedTab} = this.state;
    let contentWidth;
    let contentHeight;
    if (width / height > ASPECT_RATIO) {
      contentHeight = height;
      contentWidth = height * ASPECT_RATIO;
    } else {
      contentWidth = width;
      contentHeight = width / ASPECT_RATIO;
    }
    return (
      <div className="App" style={{
        height: contentHeight,
        width: contentWidth,
        left: (width - contentWidth) / 2,
        top: (height - contentHeight) / 2,
      }}>
        <TabContainer selectedTab={selectedTab}/>
        <Tabbar onClick={this.handleTabbarClick}/>
      </div>
    );
  }
}

export default App;
