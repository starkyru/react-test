// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import type { Tab } from '../utils/const';
import { TABS } from '../utils/const';
import { setTab } from '../redux/actions/navigation';
import type { SetTabActionCreator } from '../redux/actions/navigation';
import type { State } from '../redux/reducers';

type TabbarCallback = (id: Tab) => void;
type TabbarButtonProps = {
  id: Tab,
  onClick: TabbarCallback,
  children?: React.Node,
  selected: boolean,
};

/**
 * Tabbar button
 * @param id
 * @param onClick
 * @param children
 * @param selected
 * @returns {*}
 * @constructor
 */
const TabbarButton = ({
  id,
  onClick,
  children,
  selected,
}: TabbarButtonProps) => {
  const handleClick = () => {
    onClick(id);
  };

  const className = selected ? 'Tabbar__Button--selected' : 'Tabbar__Button';
  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

/**
 * Tabbar
 */
type TabbarProps = {
  selectedTab: Tab,
  setTab: SetTabActionCreator,
};

const Tabbar = ({ setTab, selectedTab }: TabbarProps) => {
  const handleClick = (id: Tab) => {
    // Todo move out of this component
    setTab(id);
  };

  return (
    <div className="Tabbar">
      {Object.keys(TABS).map(id => (
        <TabbarButton
          key={id}
          id={id}
          selected={id === selectedTab}
          onClick={handleClick}
        >
          {TABS[id]}
        </TabbarButton>
      ))}
    </div>
  );
};

const mapStateToProps = (state: State /*, ownProps*/) => {
  return {
    selectedTab: state.navigation.tab,
  };
};
const mapDispatchToProps = { setTab };

const TabbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabbar);

export { TabbarContainer as Tabbar };
