import withMock from 'storybook-addon-mock';
import { itemLimitReached} from './mocks/shopping/v1/item_limit';
import { noUserPlans } from './mocks/content/v1/user_plans';
import { emptyWishlist } from './mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion} from './mocks/pricing/v2/prices/show_multiple';
import { emptyLibrary } from "./mocks/content/v4/user_library";
import { noPlans } from './mocks/pricing/v1/plans';
import { availableNowUntil48Hours } from './mocks/content/v1/availabilities';
import { locationNewZealand } from './mocks/geo/v1/location/where_am_i';
import { playbackProgressExists } from './mocks/content/v1/playback_progress';

export default {
  title: 'Pages/FilmDetail',
  decorators: [withMock],
};

export const Default = (args, {loaded: { Component }}) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(Component, "text/html");
    const div = document.createElement('div');
    div.innerHTML = htmlDoc.body.innerHTML
    return div;
};

Default.loaders = [async () => {
    return ({ Component: (await new Promise(async resolve => await fetch('film/4k-film/index.html').then(res=>{
        return resolve(res.text())
     })))})

}];

Default.parameters = {
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
