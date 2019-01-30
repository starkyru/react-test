// @flow

import React, { Component } from 'react';
import {DashboardTab} from './DashboardTab';
import {EntertainmentTab} from './EntertainmentTab';
import {SelectTab} from './SelectTab'
import type {Tabs} from ''

type Props = {
  selectedTab: Tabs
};

const TabContainer = ({selectedTab}:Props)=>{
  return (
    <>
      {selectedTab === 'select' && <SelectTab/>}
      {selectedTab === 'dashboard' && <DashboardTab/>}
      {selectedTab === 'entertainment' && <EntertainmentTab/>}
    </>
  );
}

export { TabContainer };