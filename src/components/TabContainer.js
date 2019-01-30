// @flow

import React from 'react';
import {DashboardTab} from './DashboardTab';
import {EntertainmentTab} from './EntertainmentTab';
import {SelectTab} from './SelectTab';
import {TABS, type Tab} from '../utils/const';

type Props = {
  selectedTab: Tab
};

/**
 * Shows selected tab
 * @param selectedTab
 * @returns {*}
 * @constructor
 */
const TabContainer = ({selectedTab}: Props) => {
  console.log(selectedTab);
  return (
    <>
      {selectedTab === 'select' && <SelectTab/>}
      {selectedTab === 'dashboard' && <DashboardTab/>}
      {selectedTab === 'entertainment' && <EntertainmentTab/>}
    </>
  );
};

export {TabContainer};