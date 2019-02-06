// @flow

import React, { useEffect, useState } from 'react';

type Props = {
  aspectRatio: number,
  className: string,
  children?: React.Node,
};

function ResizeContainer({ aspectRatio, className, children }: Props) {
  const [dimensions, setDimensions] = useState({
    width: 1,
    height: 1,
  });

  function updateDimensions() {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width =
      w.innerWidth ||
      (documentElement && documentElement.clientWidth) ||
      body.clientWidth;
    const height =
      w.innerHeight ||
      (documentElement && documentElement.clientHeight) ||
      body.clientHeight ||
      1;

    setDimensions({ width, height });
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  });

  const { width, height } = dimensions;

  let contentWidth;
  let contentHeight;
  if (width / height > aspectRatio) {
    contentHeight = height;
    contentWidth = height * aspectRatio;
  } else {
    contentWidth = width;
    contentHeight = width / aspectRatio;
  }

  return (
    <div
      className={className}
      style={{
        height: contentHeight,
        width: contentWidth,
        left: (width - contentWidth) / 2,
        top: (height - contentHeight) / 2,
      }}
    >
      {children}
    </div>
  );
}

export { ResizeContainer };
