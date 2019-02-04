// @flow
import uuid from 'random-uuid-v4';

/**
 * Application aspect ratio
 * @type {number}
 */
const ASPECT_RATIO = 1024 / 600;

/**
 * Navigation tabs
 */
const TABS = {
  dashboard: 'Dashboard',
  select: 'Entertainment Select',
  entertainment: 'Entertainment View',
};
type Tab = $Keys<typeof TABS>;

/**
 * Video dropdown items
 * @type {*[]}
 */
type VideoItem = {|
  id: string,
  title: string,
  videos: {
    webm: ?string,
    ogg: ?string,
    mp4: ?string,
  },
  thumb: string,
|};
const PLAYLIST: Array<VideoItem> = [
  {
    id: 'bb1',
    title: 'Big Buck Bunny',
    videos: {
      webm: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm',
      ogg: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv',
      mp4: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    },
    thumb: 'http://camendesign.com/code/video_for_everybody/poster.jpg',
  },
  {
    id: 'bb2',
    title: 'Big Buck Bunny 1',
    videos: {
      webm: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm',
      ogg: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv',
      mp4: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    },
    thumb: 'http://camendesign.com/code/video_for_everybody/poster.jpg',
  },
  {
    id: 'bb3',
    title: 'Big Buck Bunny 2',
    videos: {
      webm: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm',
      ogg: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv',
      mp4: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    },
    thumb: 'http://camendesign.com/code/video_for_everybody/poster.jpg',
  },
];

const MILES_PER_KM = 0.621371;
const WORKOUT_DURATION_MS = 30 * 60 * 1000;
const API_FREQUENCY = 500;

const UUID = uuid();

export {
  ASPECT_RATIO,
  TABS,
  PLAYLIST,
  MILES_PER_KM,
  WORKOUT_DURATION_MS,
  API_FREQUENCY,
  UUID,
};
export type { Tab, VideoItem };
