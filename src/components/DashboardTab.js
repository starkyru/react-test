// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { StatusState } from '../redux/reducers/status';
import { setImperial } from '../redux/actions/ui';
import { formatSecondsToHHMMSS, formatSecondsToMMSS } from '../utils';
import { MILES_PER_KM } from '../utils/const';

const SmallBox = ({
  title,
  value,
}: {
  title: string,
  value: string | number,
}) => {
  return (
    <div className="Dashboard__smallbox">
      <span className="label">{title}</span>
      <span className="value">{value}</span>
    </div>
  );
};

const DashboardTab = ({
  status,
  imperial,
  setImperial,
}: {
  status: StatusState,
  imperial: boolean,
  setImperial: boolean => any,
}) => {
  const changeMetricSystem = () => {
    setImperial(!imperial);
  };

  const formatSpeed = speed =>
    imperial
      ? `${(speed * MILES_PER_KM).toFixed(1)} MPH`
      : `${speed.toFixed(1)} KMH`;

  const formatDistance = distance =>
    imperial
      ? `${(distance * MILES_PER_KM).toFixed(2)} MI`
      : `${distance.toFixed(2)} KM`;

  const pace = imperial ? status.pace / MILES_PER_KM : status.pace;

  return (
    <div className="Tab ">
      <div className="Dashboard">
        <div className="Dashboard__boxcolumn">
          <SmallBox
            title="Heart Rate"
            value={Math.floor(status.heart_rate) + ' BPM'}
          />
          <SmallBox
            title="Duration"
            value={formatSecondsToHHMMSS(status.duration)}
          />
          <SmallBox
            title="Duration Countdown"
            value={formatSecondsToHHMMSS(status.duration_countdown)}
          />
        </div>

        <div className="Dashboard__bigbox">
          <span className="label">Distance</span>
          <span className="bigvalue">{formatDistance(status.distance)}</span>
          <span className="label labelSpace">Speed</span>
          <span className="bigvalue">{formatSpeed(status.speed)}</span>

          <button type="button" onClick={changeMetricSystem}>
            {imperial ? 'Switch to Metric' : 'Switch to Imperial'}
          </button>
        </div>

        <div className="Dashboard__boxcolumn">
          <SmallBox title="Calories" value={Math.floor(status.calories) || 0} />
          <SmallBox title="Grade" value={status.grade.toFixed(1) + '%'} />
          <SmallBox title="Pace" value={formatSecondsToMMSS(pace)} />
        </div>
      </div>

      <div id="video-hidden" />
    </div>
  );
};

/*
Container
 */

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    status: state.status,
    imperial: state.ui.imperial,
  };
};

const mapDispatchToProps = {
  setImperial,
};

const DashboardTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTab);

export { DashboardTabContainer as DashboardTab };
