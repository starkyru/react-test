// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { TabContainer } from './TabContainer';
import { Tabbar } from './Tabbar';
import { startFakeApi } from '../redux/actions/status';
import { setTab } from '../redux/actions/navigation';
import { Video } from './Video';
import type { State } from '../redux/reducers';
import type { Tab } from '../redux/reducers/navigation';
import type { SetTabActionCreator } from '../redux/actions/navigation';
import { UUID } from '../utils/const';

/**
 * App content itself
 */
type ContentProps = {
  selectedTab: Tab,
  video: Object,
  startFakeApi: $Call<typeof startFakeApi>,
  setTab: SetTabActionCreator,
  masterUUID: string,
};

class Content extends React.Component<ContentProps, *> {
  componentDidMount(): void {
    this.props.startFakeApi();
    this.props.setTab('dashboard');
  }

  componentDidUpdate(prevProps: ContentProps): void {
    if (!this._videoComponentRef || (!prevProps.video && !this.props.video)) {
      return;
    } else if (
      UUID === this.props.masterUUID &&
      (!prevProps.video ||
        prevProps.video.id !== this.props.video.id ||
        prevProps.video.seed !== this.props.video.seed)
    ) {
      this._videoComponentRef.play();
    } else if (UUID !== this.props.masterUUID) {
      this._videoComponentRef.pause();
    }
  }

  _videoComponentRef: ?Video = null;

  handleVideoClick = () => {
    if (this.props.selectedTab === 'select') {
      this.props.setTab('entertainment');
    }
  };

  getVideoRef = ref => {
    this._videoComponentRef = ref;
  };

  render() {
    const { video, selectedTab } = this.props;
    return (
      <>
        <TabContainer />
        {video && (
          <Video
            ref={this.getVideoRef}
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
    masterUUID: state.ui.master,
  };
};

const mapDispatchToProps = { startFakeApi, setTab };

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export { ContentContainer as Content };
