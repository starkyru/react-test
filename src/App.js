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

  handleTabbarClick = (id:Tab) => {
    this.setState({selectedTab:id});
  }

  render() {
    const {width, height} = this.state;
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
        <TabContainer selectedTab={'dashboard'}/>
        <Tabbar onClick={this.handleTabbarClick}/>
      </div>
    );
  }
}

export default App;
