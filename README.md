 Using react or react+redux write a single page treadmill UI application that follows requirements:
* Only support for Chrome 71 is required
& Application content area should be of 1024:600 aspect ratio, that fits all the available
browser window space. Have black area on top/bottom or left/right of content area when browser window aspect ratio doesn’t match. All the elements within content area and all the spacing should scale as well
* Application gets workout state update from server every 500ms in following format: 
```{
"duration": 9.2, "duration_countdown": 3590.8, "calories": 0.66,
"speed": 4.82,
"grade": 0.0,
"heart_rate": 127.0,
"pace": 12.42,
"distance": 1.2,
}
```

duration - time since workout started (in seconds), increases by 0.5 with every sample duration_countdown - workout time remaining (seconds), decreases by 0.5 with every sample
speed - (kph)
grade (%)
heart_rate (bpm)
pace (min/km)
distance - distance passed since workout start (km)

For test project set up a client-side mock that uses interval timer to simulate 30 minute workout with constant speed 9 kph, and calories burn rate to be 0.1875 cal/sec.
* Content area should have tab bar at the bottom with three tabs

* Dashboard (tab1)
This tab should display name - value list with workout stat values. There also should be a toggle between Metric and Imperial unit system. When Imperial unit system is selected speed should be converted to mph, pace to min/mile and distance to miles
speed, grade should be formatted with 1 decimal place, duration and duration_countdown as hh:mm:ss. pace as mm:ss, distance - two decimal places, heart_rate and calories - displayed as floored integer.

* Entertainment Select (tab2)
This tab should have dropdown to select from several video files and button “Select” next to it. There should be preview region below the dropdown. As apply is clicked the video should be autoplayed in the preview region.
If user clicks the video preview area after the source was selected it should navigate to the “Entertainment View” tab
* Entertainment View (tab3)
This tab should have video element taking all the content above the tab bar. It should play the same video source selected on tab2. Video playback should not restart on switching between tab2 and tab3, only video element size should increase. Also if video source is selected and user switches to “Dashboard” tab, video gets hidden but audio should keep playing.

#####Optional
These are not necessary but becomes a plus
* Two instances of application opened in two tabs of the same browser should sync page
location and entertainment video selection.
i.e navigating to entertainment view tab in app instance 1 switches app instance 2 to entertainment view as well
● Using type checking with Flow or Typescript
