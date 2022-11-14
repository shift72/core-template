import withMock from 'storybook-addon-mock';
import { itemLimitNotReached } from '../mocks/shopping/v1/item_limit';
import { noUserPlans } from '../mocks/content/v1/user_plans';
import { emptyWishlist } from '../mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion, singleFilmBuyableInYourRegion, noPricesInYourRegion, singleFilmBuyableAndRentableInYourRegion, singleFilmBelongsToSingleRecurringPlan } from '../mocks/pricing/v2/prices/show_multiple';
import { currentlyRenting, emptyLibrary } from "../mocks/content/v4/user_library";
import { assortedPlans, noPlans } from '../mocks/pricing/v1/plans';
import { availableNowUntil48Hours, noAvailabilitySet } from '../mocks/content/v1/availabilities';
import { locationNewZealand } from '../mocks/geo/v1/location/where_am_i';
import { playbackProgressExists } from '../mocks/content/v1/playback_progress';
import { customDocs } from '../functions/customDocs'

export default {
  title: 'Pages/404',
  decorators: [withMock],
  parameters: {
    docs: { page: customDocs(`<h3>No docs written yet<h3>`) }
  },
};

export const Primary = (args, {loaded: { Component }}) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(Component, "text/html");
    const div = document.createElement('div');
    div.innerHTML = htmlDoc.body.innerHTML
    return div;
};

Primary.loaders  = [async () => {
  return ({ Component: (await new Promise(async resolve => await fetch('404.html').then(res=>{
    return resolve(res.text())
  })))})
}];