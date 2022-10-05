import withMock from 'storybook-addon-mock';
import { itemLimitReached} from './../mocks/shopping/v1/item_limit';
import { noUserPlans } from './../mocks/content/v1/user_plans';
import { emptyWishlist } from './../mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion} from './../mocks/pricing/v2/prices/show_multiple';
import { emptyLibrary } from "./../mocks/content/v4/user_library";
import { noPlans } from './../mocks/pricing/v1/plans';
import { availableNowUntil48Hours } from './../mocks/content/v1/availabilities';
import { locationNewZealand } from './../mocks/geo/v1/location/where_am_i';
import { playbackProgressExists } from './../mocks/content/v1/playback_progress';
import { assortedBundles } from './../mocks/meta/v1/bundles';
import { multipleEpisodes } from './../mocks/meta/v2/tv/season/show_multiple';

export default {
  title: 'Organisms/FilmDetailPageOrganisms',
  decorators: [withMock],
};

export const BonusContent = (args, {loaded: { Component }}) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(Component, "text/html");
  const div = document.createElement('div');
  div.innerHTML = htmlDoc.querySelector('.meta-detail-bonus-content').outerHTML
  return div;
};

BonusContent.loaders = [async () => {
  return ({ Component: (await new Promise(async resolve => await fetch('film/storybook/index.html').then(res=>{
      return resolve(res.text())
   })))})

}];

BonusContent.parameters = {
mockData: [
  itemLimitReached,
  noPlans,
  singleFilmRentableInYourRegion,
  availableNowUntil48Hours,
  noUserPlans,
  emptyLibrary,
  emptyWishlist,
  locationNewZealand,
  playbackProgressExists,
  assortedBundles,
  multipleEpisodes
  ]
};
