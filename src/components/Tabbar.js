// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import type {Tab} from '../utils/const';
import {TABS} from '../utils/const';
import {setTab} from '../redux/actions/navigation';

type TabbarCallback = (id: Tab)=>void;
type TabbarButtonProps = {
  id: Tab,
  onClick: TabbarCallback,
  children?: React.Node,
};

/**
 * Tabbar button
 * @param id
 * @param onClick
 * @param children
 * @returns {*}
 * @constructor
 */
const TabbarButton = ({id, onClick, children}: TabbarButtonProps) => {
  const handleClick = () => {
    onClick(id);
  };

  return <button type="button" className="Tabbar__Button" onClick={handleClick}>{children}</button>;
};

/**
 * Tabbar
 */
type TabbarProps = {
  setTab: typeof setTab,
};

const Tabbar = ({onClick, setTab}: TabbarProps) => {
  const handleClick = (id: Tab) => {
    setTab(id);
  };

  return (
    <div className="Tabbar">
      {Object.keys(TABS).map(id =>
        <TabbarButton key={id} id={id} onClick={handleClick}>{TABS[id]}</TabbarButton>,
      )}
      {/*<TabbarButton id={'select'} onClick={onClick}>Entertainment Select</TabbarButton>*/}
      {/*<TabbarButton id={'entertainment'} onClick={onClick}>Entertainment View</TabbarButton>*/}
    </div>
  );
};

const mapDispatchToProps = {setTab};

const TabbarContainer = connect(
  null,
  mapDispatchToProps,
)(Tabbar);

export {TabbarContainer as Tabbar};