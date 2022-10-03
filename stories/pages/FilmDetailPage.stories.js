import withMock from 'storybook-addon-mock';
import { itemLimitReached} from '../mocks/shopping/v1/item_limit';
import { noUserPlans } from '../mocks/content/v1/user_plans';
import { emptyWishlist } from '../mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion} from '../mocks/pricing/v2/prices/show_multiple';
import { emptyLibrary } from "../mocks/content/v4/user_library";
import { noPlans } from '../mocks/pricing/v1/plans';
import { availableNowUntil48Hours } from '../mocks/content/v1/availabilities';
import { locationNewZealand } from '../mocks/geo/v1/location/where_am_i';
import { playbackProgressExists } from '../mocks/content/v1/playback_progress';

export default {
  title: 'Pages/FilmDetail',
  decorators: [withMock],
};

export const All = (args, {loaded: { Component }}) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(Component, "text/html");
    const div = document.createElement('div');
    div.innerHTML = htmlDoc.body.innerHTML
    return div;
};

All.loaders = [async () => {
    return ({ Component: (await new Promise(async resolve => await fetch('film/storybook/index.html').then(res=>{
        return resolve(res.text())
     })))})

}];

All.parameters = {
  mockData: [
    itemLimitReached,
    noPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    noUserPlans,
    emptyLibrary,
    emptyWishlist,
    locationNewZealand,
    playbackProgressExists
    ]
};

export const NoAwardCategories = (args, {loaded: { Component }}) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(Component, "text/html");
  const div = document.createElement('div');
  div.innerHTML = htmlDoc.body.innerHTML
 div.querySelector('.meta-awards').remove();
  return div;
};

NoAwardCategories.loaders = [async () => {
  return ({ Component: (await new Promise(async resolve => await fetch('film/storybook/index.html').then(res=>{
      return resolve(res.text())
   })))})

}];

NoAwardCategories.parameters = {
mockData: [
  itemLimitReached,
  noPlans,
  singleFilmRentableInYourRegion,
  availableNowUntil48Hours,
  noUserPlans,
  emptyLibrary,
  emptyWishlist,
  locationNewZealand,
  playbackProgressExists
  ]
};

export const NoBonusContent = (args, {loaded: { Component }}) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(Component, "text/html");
  const div = document.createElement('div');
  div.innerHTML = htmlDoc.body.innerHTML
 div.querySelector('.meta-detail-bonus-content').remove();
  return div;
};

NoBonusContent.loaders = [async () => {
  return ({ Component: (await new Promise(async resolve => await fetch('film/storybook/index.html').then(res=>{
      return resolve(res.text())
   })))})

}];

NoBonusContent.parameters = {
mockData: [
  itemLimitReached,
  noPlans,
  singleFilmRentableInYourRegion,
  availableNowUntil48Hours,
  noUserPlans,
  emptyLibrary,
  emptyWishlist,
  locationNewZealand,
  playbackProgressExists
  ]
};

export const NoBonusContentNoAwardCategories = (args, {loaded: { Component }}) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(Component, "text/html");
  const div = document.createElement('div');
  div.innerHTML = htmlDoc.body.innerHTML
 div.querySelector('.meta-awards').remove();

 div.querySelector('.meta-detail-bonus-content').remove();
  return div;
};

NoBonusContentNoAwardCategories.loaders = [async () => {
  return ({ Component: (await new Promise(async resolve => await fetch('film/storybook/index.html').then(res=>{
      return resolve(res.text())
   })))})

}];

NoBonusContentNoAwardCategories.parameters = {
mockData: [
  itemLimitReached,
  noPlans,
  singleFilmRentableInYourRegion,
  availableNowUntil48Hours,
  noUserPlans,
  emptyLibrary,
  emptyWishlist,
  locationNewZealand,
  playbackProgressExists
  ]
};
