// @flow

import * as React from 'react';

type State = {
  width: number,
  height: number,
}

type Props = {
  aspectRatio: number,
  className: string,
  children?: React.Node,
}
class ResizeContainer extends React.Component<Props, State> {
  state = {
    width: 1,
    height: 1,
  };
  updateDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || (documentElement && documentElement.clientWidth) || body.clientWidth;
    const height = w.innerHeight || (documentElement && documentElement.clientHeight) || body.clientHeight || 1;

    this.setState({width: width, height: height});
  };

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const {width, height} = this.state;
    const {aspectRatio, children, className} = this.props;

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
      <div className={className} style={{
        height: contentHeight,
        width: contentWidth,
        left: (width - contentWidth) / 2,
        top: (height - contentHeight) / 2,
      }}>
        {children}
      </div>
    );
  }
}

export {ResizeContainer};
