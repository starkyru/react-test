// @flow

import React from 'react';
import {connect} from 'react-redux';
import {DashboardTab} from './DashboardTab';
import {EntertainmentTab} from './EntertainmentTab';
import {SelectTab} from './SelectTab';
import {type Tab} from '../utils/const';
import type {State} from '../redux/reducers';

type Props = {
  selectedTab: Tab
};

/**
 * Shows selected tab
 * @param selectedTab
 * @returns {*}
 * @constructor
 */
const Tabs = ({selectedTab}: Props) => {
  console.log(selectedTab);
  return (
    <>
      {selectedTab === 'select' && <SelectTab/>}
      {selectedTab === 'dashboard' && <DashboardTab/>}
      {selectedTab === 'entertainment' && <EntertainmentTab/>}
    </>
  );
};

/*
Container
 */

const mapStateToProps = (state: State /*, ownProps*/) => {
  return {
    selectedTab: state.navigation.tab,
  };
};

const TabContainer = connect(
  mapStateToProps,
  null,
)(Tabs);


export {TabContainer};