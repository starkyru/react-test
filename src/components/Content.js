// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TabContainer } from './TabContainer';
import { Tabbar } from './Tabbar';
import { startFakeApi } from '../redux/actions/status';
import { setTab } from '../redux/actions/navigation';
import { Video } from './Video';
import type { State } from '../redux/reducers';
import type { Tab } from '../redux/reducers/navigation';

/**
 * App content itself
 */
type ContentProps = {
  selectedTab: Tab,
  video: Object,
  startFakeApi: $Call<typeof startFakeApi>,
  setTab: $Call<typeof setTab>,
};

class Content extends Component<ContentProps, *> {
  componentDidMount(): void {
    this.props.startFakeApi();
  }

  handleVideoClick = () => {
    if (this.props.selectedTab === 'select') {
      this.props.setTab('entertainment');
    }
  };

  render() {
    const { video, selectedTab } = this.props;
    return (
      <>
        <TabContainer />
        {video && (
          <Video
            title={video.title}
            videos={video.videos}
            thumb={video.thumb}
            onClick={this.handleVideoClick}
            visible={
              selectedTab === 'select' || selectedTab === 'entertainment'
            }
            small={selectedTab === 'select'}
          />
        )}
        <Tabbar />
      </>
    );
  }
}

const mapStateToProps = (state: State /*, ownProps*/) => {
  return {
    selectedTab: state.navigation.tab,
    video: state.ui.video,
  };
};

const mapDispatchToProps = { startFakeApi, setTab };

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export { ContentContainer as Content };
