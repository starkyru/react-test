// @flow

import React from 'react';
import { PLAYLIST } from '../utils/const';
import { setVideo } from '../redux/actions/ui';
import type { State } from '../redux/reducers';
import { connect } from 'react-redux';

const SelectTab = ({
  setVideo,
  currentVideo,
}: {
  setVideo: typeof setVideo,
  currentVideo: ?Object,
}) => {
  let _selectedVideo = currentVideo || PLAYLIST[0];
  const handleChange = e => {
    console.log(
      PLAYLIST.find(element => element.id === e.target.value),
      e.target.value
    );
    _selectedVideo = PLAYLIST.find(element => element.id === e.target.value);
  };

  const handleVideoSelect = () => {
    setVideo(_selectedVideo);
  };

  return (
    <div className="Tab__select">
      <select className="video__select" onChange={handleChange}>
        {PLAYLIST.map(video => (
          <option key={video.id} value={video.id}>
            {video.title}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="video__button"
        onClick={handleVideoSelect}
      >
        Select Video
      </button>
    </div>
  );
};

/*
Container
 */

const mapStateToProps = (state: State /*, ownProps*/) => {
  return {
    currentId: state.ui.video ? state.ui.video.id : null,
  };
};

const mapDispatchToProps = {
  setVideo,
};

const SelectTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTab);

export { SelectTabContainer as SelectTab };
