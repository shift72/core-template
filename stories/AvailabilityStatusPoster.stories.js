import { createAvailabilityStatusPoster } from './AvailabilityStatusPoster';
import withMock from 'storybook-addon-mock';
import { customDocs } from './functions/customDocs'
import { itemLimitReached, itemLimitNotReached, noItemLimits } from './mocks/shopping/v1/item_limit';
import { noPlaybackProgress, playbackProgressExists } from './mocks/content/v1/playback_progress';
import { noUserPlans } from './mocks/content/v1/user_plans';
import { emptyWishlist } from './mocks/users/v1/wishlist';
import { singleFilmRentableInYourRegion, noPricesInYourRegion, singleFilmBelongsToMultipleRecurringPlans } from './mocks/pricing/v2/prices/show_multiple';
import { currentlyRenting, startedWatchWindow, emptyLibrary, expiredWatchWindow } from "./mocks/content/v3/user_library";
import { assortedPlans, noPlans } from './mocks/pricing/v1/plans';
import { availableNowUntil48Hours, availableIn48Hours, availableIn24Hours, availableIn3Hours, availableIn1Hour, availableIn8Days, availableNowUntilIndefinate, expired48HoursAgo, noAvailabilitySet } from './mocks/content/v1/availabilities';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export default {
  title: 'Molecules/AvailabilityStatusPoster',
  argTypes: {
    poster: {
      control: 'text'
    },

  },
  parameters: {
    docs: { page: customDocs(`<h3>No docs written yet<h3>`) }
  },
  decorators: [withMock],
};

const Template = ({ label, ...args }) => {
  return createAvailabilityStatusPoster({ label, ...args });
};

export const SoldOut = Template.bind({});
SoldOut.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};
SoldOut.parameters = {
  mockData: [
    itemLimitReached,
    noPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    noUserPlans,
    emptyLibrary,
    emptyWishlist
    ],
    docs: {
      page: customDocs(`
        <h3 class="mb-2 well">Key conditions that trigger 'Sold out':</h3>
        <h4>APIs:</h4>
        <code>/services/shopping/v1/item_limit</code>
        <pre>
          <code>
          [{
            ...
            "can_rent": false,
            "can_buy": false,
            ...
          }]
          </code>
        </pre>
      `)
    }
};

export const SubscribeToWatch = Template.bind({});
SubscribeToWatch.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

SubscribeToWatch.parameters = {
  mockData: [
    noItemLimits,
    assortedPlans,
    singleFilmBelongsToMultipleRecurringPlans,
    noAvailabilitySet,
    noUserPlans,
    emptyLibrary,
    emptyWishlist
    ],
    docs: {
      page: customDocs(`
        <h3 class="mb-2">Key conditions that trigger 'Subscribe to watch':</h3>
        <h4>APIs:</h4>
        <code>/services/pricing/v2/prices/show_multiple?items=/film/123</code>
        <pre>
          <code>
          {
            "prices": [],
            "plans":[
              {"item":"/film/123","plans":["/plan/56","/plan/79"]},
            ]
          }
          </code>
        </pre>
        <code>/services/pricing/v1/plans</code>
        <pre>
          <code>
          [
            {
              "id": 56,
              "plan_type": "recurring",
              ...
            },
            {
              "id": 79,
              "plan_type": "recurring",
              ...
            }
          ]
          </code>
        </pre>
        <h4>Configs:</h4>
        <pre>
          <code>
          "subscribe_to_watch":"true"
          </code>
        </pre>
      `)
    }
};


export const Renting = Template.bind({});
Renting.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};
Renting.parameters = {
  mockData: [
    noPlans,
    noUserPlans,
    emptyWishlist,
    singleFilmRentableInYourRegion,
    availableNowUntilIndefinate,
    noItemLimits,
    currentlyRenting,
    noPlaybackProgress
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Renting' label:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v3/user_library/123/index</code>
      <pre>
        <code>
          [{
            "item": "/film/123",
            "info": {
              ...
              "expiry": "2040-04-17T07:00:00.000Z", //future date
              ...
            }
          }]
        </code>
      </pre>
    `)
  }
};

export const AvailableUntil = Template.bind({});
AvailableUntil.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

AvailableUntil.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableNowUntil48Hours,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Available Until' label:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
          [{
            "slug": "/film/123",
            "to": "2022-09-15T22:53:01.374Z", // some future date
            ...
          }]
        </code>
      </pre>
    `)
  }
};

export const ComingSoonMoreThan1Week = Template.bind({});
ComingSoonMoreThan1Week.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

ComingSoonMoreThan1Week.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableIn8Days,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Coming soon' plus 'Available {{day month year}}' label:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
        [{
          "slug": "/film/123",
          "from": "${new Date().addHours(24 * 8).toISOString()}", //now plus 8 days, or anytime over one week
        }]
        </code>
      </pre>
    `)
  }
};


export const ComingSoonWithinWeek = Template.bind({});
ComingSoonWithinWeek.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

ComingSoonWithinWeek.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableIn48Hours,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Coming soon' plus 'Available {{weekday}} {{time}}' label:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
        [{
          "slug": "/film/123",
          "from": "${new Date().addHours(48).toISOString()}", //now plus 48 hours, or anytime within one week
        }]
        </code>
      </pre>
    `)
  }
};

export const ComingSoon24Hours = Template.bind({});
ComingSoon24Hours.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

ComingSoon24Hours.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableIn24Hours,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Coming soon' plus 'Available tomorrow {{time}}' label:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
        [{
          "slug": "/film/123",
          "from": "${new Date().addHours(24).toISOString()}", //now plus 24 hours
        }]
        </code>
      </pre>
    `)
  }
};

export const ComingSoon3Hours = Template.bind({});
ComingSoon3Hours.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

ComingSoon3Hours.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableIn3Hours,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Coming soon' plus 'Available today {{time}}' label:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
        [{
          "slug": "/film/123",
          "from": "${new Date().addHours(3).toISOString()}", //now plus 3 hours
        }]
        </code>
      </pre>

      Note: if you view this component after 9pm it will say 'tomorrow'
    `)
  }
};

export const ComingSoon1Hour = Template.bind({});
ComingSoon1Hour.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

ComingSoon1Hour.parameters = {
  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    availableIn1Hour,
    emptyWishlist,
    noUserPlans,
    emptyLibrary
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Coming soon' plus 'Available today {{time}}' label:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
        [{
          "slug": "/film/123",
          "from": "${new Date().addHours(1).toISOString()}", //now plus 1 hours
        }]
        </code>
      </pre>

      Note: if you view this component after 11pm it will say 'tomorrow'

    `)
  }
};




export const Expired = Template.bind({});
Expired.args = {
  warning: `<b>Note: </b>
  <ul>
    <li>The 'Expired' availability-status and availability-labels below are currently hidden in core-template.</li>
    <li>Hidden as part of <a style="color:black" href="https://github.com/shift72/core-template/pull/292">this pr</a></li>
    <li>Unsure if was a mistake</li>
    <li>The only indication of expired is the exclamation mark+expired component on the detail page below the title</li>
    <li>If you believe this is a mistake please let us know and we will unhide in core template</li>
  </ul>`,
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

Expired.parameters = {

  mockData: [
    itemLimitNotReached,
    assortedPlans,
    singleFilmRentableInYourRegion,
    expired48HoursAgo,
    noUserPlans,
    expiredWatchWindow,
    emptyWishlist
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Expired' labels:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
        [{
          "slug": "/film/123",
          "from": "${new Date().addHours(-13).toISOString()}", // 13 hours ago
        }]
        </code>
      </pre>
    `)
  }

};

export const NotAvailable = Template.bind({});
NotAvailable.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

NotAvailable.parameters = {
  mockData: [
    noPlans,
    emptyWishlist,
    noPricesInYourRegion,
    availableNowUntilIndefinate,
    noItemLimits,
    noUserPlans,
    emptyLibrary
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Not Available in your country' label:</h3>
      <h4>APIs:</h4>
      <code>/services/pricing/v2/prices/show_multiple?items=/film/123</code>
      <pre>
        <code>
        {
          "prices": [],
          "plans": []
        }
        </code>
      </pre>
    `)
  }
};

export const InWatchWindow = Template.bind({});
InWatchWindow.args = {
  poster: "https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg",
};

InWatchWindow.parameters = {
  mockData: [
    noPlans,
    noUserPlans,
    emptyWishlist,
    singleFilmRentableInYourRegion,
    availableNowUntilIndefinate,
    noItemLimits,
    startedWatchWindow,
    playbackProgressExists
  ],
  docs: {
    page: customDocs(`
      <h3 class="mb-2">Key conditions that trigger 'Continue' button:</h3>
      <h4>APIs:</h4>
      <code>/services/content/v1/playback_progress/123</code>
      <pre>
        <code>
        {
          "play_position": 50,
          "item": "/film/123",
        }
        </code>
      </pre>
      <code>/services/content/v1/availabilities?items=/film/123</code>
      <pre>
        <code>
        [{
          "slug": "/film/123",
          "from": "${new Date().addHours(72).toISOString()}", // 72 hour watch window just started
        }]
        </code>
    `)
  }
};
