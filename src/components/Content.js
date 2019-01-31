// @flow

import React, {Component} from 'react';

import {TabContainer} from './TabContainer';
import {Tabbar} from './Tabbar';
import {startFakeApi} from '../redux/actions/status';
import {connect} from 'react-redux';

/**
 * App content itself
 */
class Content extends Component<*, *> {
  componentDidMount(): void {
    this.props.startFakeApi();
  }

  render() {
    return (
      <>
        <TabContainer/>
        <Tabbar/>
      </>
    );
  }
}

const mapDispatchToProps = {startFakeApi};

const ContentContainer = connect(
  null,
  mapDispatchToProps,
)(Content);

export {ContentContainer as Content};
