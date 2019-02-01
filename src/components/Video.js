// @flow

import React, { Component } from 'react';

type VideoProps = {
  title: string,
  videos: { webm: string, ogg: string, mp4: string },
  thumb: string,
  visible: boolean,
  onClick: () => void,
};

class Video extends Component<VideoProps, null> {
  render() {
    const { videos, thumb, visible, onClick } = this.props;
    return (
      <div
        className="video__container"
        style={{ display: visible ? '' : 'none' }}
      >
        <video
          className="video"
          controls
          poster={thumb}
          autoPlay
          onClick={onClick}
        >
          {videos.mp4 && <source src={videos.mp4} type="video/mp4" />}
          {videos.ogg && <source src={videos.ogg} type="video/ogg" />}
          {videos.webm && <source src={videos.webm} type="video/webm" />}
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>
    );
  }
}

export { Video };
