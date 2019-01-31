// @flow

import React from 'react';
import {connect} from 'react-redux';
import type {StatusState} from '../redux/reducers/status';

const DashboardTab = ({status}: { status: StatusState }) => {
  console.log(status);
  return (
    <div className="Tab">
      <h1>Dashboard</h1>
      <p>This tab should display name - value list with workout stat values. There also should be a toggle between
        Metric and Imperial unit system. When Imperial unit system is selected speed should be converted to mph, pace to
        min/mile and distance to miles
        speed, grade should be formatted with 1 decimal place, duration and duration_countdown as hh:mm:ss. pace as
        mm:ss, distance - two decimal places, heart_rate and calories - displayed as floored integer.</p>

      <div>"duration": {status.duration}</div>
      <div>"duration_countdown": {status.duration_countdown}</div>
      <div>"calories": {status.calories}</div>
      <div>"speed": {status.speed}</div>
      <div>"grade": {status.grade},</div>
      <div>"heart_rate": {status.heart_rate}</div>
      <div>"pace": {status.pace}</div>
      <div>"distance": {status.distance}</div>
      <button type="button">metric</button>
      <button type="button">imperial</button>
    </div>
  );
};

/*
Container
 */

const mapStateToProps = (state: State /*, ownProps*/) => {
  return {
    status: state.status,
  };
};

const DashboardTabContainer = connect(
  mapStateToProps,
  null,
)(DashboardTab);

export {DashboardTabContainer as DashboardTab};