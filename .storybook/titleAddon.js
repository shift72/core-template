// // .storybook/titleAddon.js
// import addons from '@storybook/addons'
// import { STORY_RENDERED, NAVIGATE_URL,GLOBALS_UPDATED,UPDATE_QUERY_PARAMS } from '@storybook/core-events'

// addons.register('TitleAddon', api => {
//   const cunstomTitle = 'abc'; // Define your customTitle title
//   let interval = null;
//   const setTitle = () => {
//     clearTimeout(interval);
//     let storyData = null;
//     try {
//         storyData = api.getCurrentStoryData(); // Some time get error
//     } catch(e) {}
//     let title;
//     if (!storyData) {
//         title = cunstomTitle;
//     } else {
//         title = `${storyData.kind} - ${storyData.name} ⋅ ${cunstomTitle}`
//     }
//     if (document.title !== title) { // As few dom operations as possible
//         document.title = title;
//     }
//     interval = setTimeout(setTitle, 100);
//   };
//   setTitle();
//   api.on(STORY_RENDERED, story => {
//     console.log(api);
//     console.log(api.resetLayout());
//   })

// });

// /my-addon/manager.js

import React from 'react';

import { useStorybookState } from '@storybook/api';

export const Panel = () => {
  const state = useStorybookState();

  return <div>do something with storybook's state</div>;
};