// @flow

import React, {Component} from 'react';

type Tab = 'select' | 'entertainment' | 'dashboard';

type TabbarCallback = (id: Tab)=>void;
type TabbarButtonProps = {
  id: Tab,
  onClick: TabbarCallback,
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
  onClick: TabbarCallback,
};

const Tabbar = ({onClick}: TabbarProps) => {
  return (
    <div className="Tabbar">
      <TabbarButton id={'dashboard'} onClick={onClick}>Dashboard</TabbarButton>
      <TabbarButton id={'select'} onClick={onClick}>Entertainment Select</TabbarButton>
      <TabbarButton id={'entertainment'} onClick={onClick}>Entertainment View</TabbarButton>
    </div>
  );
};

export {Tabbar};
export type {Tab};