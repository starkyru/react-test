// @flow

import React, {Component} from 'react';

import {TabContainer} from './TabContainer';
import {Tabbar} from './Tabbar';
import type {Tab} from '../utils/const';

/**
 * App content itself
 */
class Content extends Component<*, *> {
  render() {
    return (
      <>
        <TabContainer/>
        <Tabbar/>
      </>
    );
  }
}

export {Content};
