// @flow

/**
 * Application aspect ratio
 * @type {number}
 */
const ASPECT_RATIO = 1024 / 600;
const TABS = {
  dashboard: 'Dashboard',
  select: 'Entertainment Select',
  entertainment: 'Entertainment View',
}
type Tab = $Keys<typeof TABS>;

export {ASPECT_RATIO, TABS};
export type {Tab};