/**
 * Video component
 *
 * @flow
 */

import * as React from 'react';

type VideoProps = {
  title: string,
  videos: { webm: string, ogg: string, mp4: string },
  thumb: string,
  visible: boolean,
  onClick: () => void,
};

class Video extends React.PureComponent<VideoProps, null> {
  _videoRef: { current: null | HTMLVideoElement };

  constructor(props: VideoProps) {
    super(props);
    this._videoRef = React.createRef<HTMLVideoElement>();
  }

  play() {
    this._videoRef.current && this._videoRef.current.play();
  }

  pause() {
    this._videoRef.current && this._videoRef.current.pause();
  }

  render() {
    const { videos, thumb, visible, onClick } = this.props;
    return (
      <div
        className={
          'video__container' + (visible ? '' : ' video__container--hidden')
        }
      >
        <video
          ref={this._videoRef}
          className="video"
          controls
          poster={thumb}
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
