// @flow

import React, {Component} from 'react';

import {TabContainer} from './TabContainer';
import {Tabbar} from './Tabbar';
import type {Tab} from './Tabbar';

type State = {
  selectedTab: Tab,
}

/**
 * App content itself
 */
class Content extends Component<*, State> {
  state = {
    selectedTab: 'dashboard',
  };

  handleTabbarClick = (id: Tab) => {
    this.setState({selectedTab: id});
  };

  render() {
    return (
      <>
        <TabContainer selectedTab={this.state.selectedTab}/>
        <Tabbar onClick={this.handleTabbarClick}/>
      </>
    );
  }
}

export {Content};
