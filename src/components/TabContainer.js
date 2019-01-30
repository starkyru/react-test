// @flow

import React from 'react';
import {DashboardTab} from './DashboardTab';
import {EntertainmentTab} from './EntertainmentTab';
import {SelectTab} from './SelectTab';
import type {Tabs} from '';

type Props = {
  selectedTab: Tabs
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