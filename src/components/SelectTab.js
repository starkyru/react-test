// @flow

import React from 'react';

const SelectTab = () => {
  return (
    <div className="Tab">
      <h1>Entertainment Select</h1>
      <p>
        This tab should have dropdown to select from several video files and
        button “Select” next to it. There should be preview region below the
        dropdown. As apply is clicked the video should be autoplayed in the
        preview region. If user clicks the video preview area after the source
        was selected it should navigate to the “Entertainment View” tab
      </p>
    </div>
  );
};

export { SelectTab };
