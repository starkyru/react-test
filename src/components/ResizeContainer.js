// @flow

import React, { useEffect, useState } from 'react';

type Props = {
  aspectRatio: number,
  className: string,
  children?: React.Node,
};

function useWindowDimensionsHook() {
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

  return dimensions;
}

function useAspectRatioHook(aspectRatio) {
  const {
    width: windowWidth,
    height: windowHeight,
  } = useWindowDimensionsHook();

  let width;
  let height;
  if (windowWidth / windowHeight > aspectRatio) {
    height = windowHeight;
    width = windowHeight * aspectRatio;
  } else {
    width = windowWidth;
    height = windowWidth / aspectRatio;
  }
  return {
    width,
    height,
    left: (windowWidth - width) / 2,
    top: (windowHeight - height) / 2,
  };
}

function ResizeContainer({ aspectRatio, className, children }: Props) {
  const dimensions = useAspectRatioHook(aspectRatio);

  return (
    <div className={className} style={dimensions}>
      {children}
    </div>
  );
}

export { ResizeContainer };
