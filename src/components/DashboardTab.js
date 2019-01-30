// @flow

import React from 'react';

const DashboardTab = () => {
  return (
    <div className="Tab">
      <h1>Dashboard</h1>
      <p>This tab should display name - value list with workout stat values. There also should be a toggle between
        Metric and Imperial unit system. When Imperial unit system is selected speed should be converted to mph, pace to
        min/mile and distance to miles
        speed, grade should be formatted with 1 decimal place, duration and duration_countdown as hh:mm:ss. pace as
        mm:ss, distance - two decimal places, heart_rate and calories - displayed as floored integer.</p>
    </div>
  );
};

export {DashboardTab};