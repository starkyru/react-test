// @flow

import React, {Component} from 'react';

const EntertainmentTab = () => {
  return (
    <div className="Tab">
      <p>
        <h1>Entertainment</h1>
        This tab should have video element taking all the content above the tab bar. It should play the same video
        source selected on tab2. Video playback should not restart on switching between tab2 and tab3, only video
        element size should increase. Also if video source is selected and user switches to “Dashboard” tab, video gets
        hidden but audio should keep playing.
      </p>
    </div>
  );
};

export {EntertainmentTab};