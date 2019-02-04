// @flow

import React from 'react';
import { PLAYLIST } from '../utils/const';
import { setVideo, setSelectedVideo } from '../redux/actions/ui';
import type { State } from '../redux/reducers';
import { connect } from 'react-redux';

type SelectTabProps = {
  setVideo: Function,
  currentVideo: ?Object,
  selectedId: number,
  setSelectedVideo: Function,
};

class SelectTab extends React.Component<SelectTabProps, null> {
  handleChange = e => {
    this.props.setSelectedVideo(e.target.value);
  };

  handleVideoSelect = () => {
    this.props.setVideo(
      PLAYLIST.find(element => element.id === this.props.selectedId)
    );
  };

  render() {
    return (
      <div className="Tab__select">
        <select
          className="video__select"
          value={this.props.selectedId}
          onChange={this.handleChange}
        >
          {PLAYLIST.map(video => (
            <option key={video.id} value={video.id}>
              {video.title}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="video__button"
          onClick={this.handleVideoSelect}
        >
          Select Video
        </button>
      </div>
    );
  }
}

/*
Container
 */

const mapStateToProps = (state: State /*, ownProps*/) => {
  return {
    currentId: state.ui.video ? state.ui.video.id : null,
    selectedId: state.ui.selectedVideo,
  };
};

const mapDispatchToProps = {
  setVideo,
  setSelectedVideo,
};

const SelectTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTab);

export { SelectTabContainer as SelectTab };
