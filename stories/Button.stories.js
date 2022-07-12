import { createButton } from './Button';
import withMock from 'storybook-addon-mock';
// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  decorators: [withMock],
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  mockData: [
      {
          url: 'http://localhost:6006/services/shopping/v1/item_limit',
          method: 'GET',
          status: 200,
          response: [{"slug":"/film/104","max_rent":null,"max_buy":null,"max_total":40,"count_rent":20,"count_buy":4,"created_at":"2020-09-25T04:05:08.951Z","updated_at":"2020-09-25T04:12:23.786Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/2476","max_rent":null,"max_buy":null,"max_total":100,"count_rent":13,"count_buy":0,"created_at":"2021-08-18T00:36:03.755Z","updated_at":"2021-08-18T00:36:03.755Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/137","max_rent":null,"max_buy":null,"max_total":null,"count_rent":58,"count_buy":5,"created_at":"2020-09-25T04:00:42.998Z","updated_at":"2020-09-29T04:32:35.308Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/192","max_rent":null,"max_buy":null,"max_total":10,"count_rent":0,"count_buy":0,"created_at":"2020-11-18T00:49:10.381Z","updated_at":"2020-11-18T00:49:10.381Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/53","max_rent":null,"max_buy":null,"max_total":null,"count_rent":58,"count_buy":12,"created_at":"2020-07-04T23:32:11.139Z","updated_at":"2020-10-30T01:04:52.718Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/2553","max_rent":null,"max_buy":null,"max_total":1000,"count_rent":5,"count_buy":0,"created_at":"2021-09-20T00:05:00.873Z","updated_at":"2021-09-20T00:05:00.873Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/348","max_rent":null,"max_buy":null,"max_total":null,"count_rent":0,"count_buy":0,"created_at":"2021-02-10T01:44:35.971Z","updated_at":"2021-02-10T01:48:14.057Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/1946","max_rent":null,"max_buy":null,"max_total":2,"count_rent":0,"count_buy":0,"created_at":"2020-12-16T01:57:52.963Z","updated_at":"2020-12-16T01:57:52.963Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/bundle/92","max_rent":null,"max_buy":null,"max_total":null,"count_rent":1,"count_buy":3,"created_at":"2022-03-06T21:24:34.833Z","updated_at":"2022-05-09T02:41:08.217Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/405","max_rent":null,"max_buy":null,"max_total":10,"count_rent":10,"count_buy":0,"created_at":"2020-07-08T02:14:43.552Z","updated_at":"2020-11-18T00:43:42.322Z","can_rent":false,"can_buy":false,"level_rent":1,"level_buy":1},{"slug":"/bundle/5","max_rent":null,"max_buy":null,"max_total":null,"count_rent":26,"count_buy":7,"created_at":"2020-06-30T08:58:54.714Z","updated_at":"2021-03-09T20:11:49.561Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/1940","max_rent":null,"max_buy":null,"max_total":10,"count_rent":5,"count_buy":0,"created_at":"2022-04-04T02:34:46.987Z","updated_at":"2022-06-16T23:07:01.552Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/bundle/29","max_rent":22,"max_buy":33,"max_total":2,"count_rent":2,"count_buy":0,"created_at":"2020-06-25T03:08:47.606Z","updated_at":"2020-07-08T02:15:56.490Z","can_rent":false,"can_buy":false,"level_rent":0.09090909090909091,"level_buy":0},{"slug":"/film/2965","max_rent":null,"max_buy":null,"max_total":null,"count_rent":4,"count_buy":0,"created_at":"2022-05-26T00:47:54.733Z","updated_at":"2022-06-09T23:01:46.867Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/bundle/93","max_rent":null,"max_buy":null,"max_total":3333,"count_rent":0,"count_buy":0,"created_at":"2022-03-11T02:53:12.197Z","updated_at":"2022-03-11T02:53:12.197Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/tv/378/season/1","max_rent":null,"max_buy":null,"max_total":9999,"count_rent":0,"count_buy":0,"created_at":"2022-03-11T03:01:26.935Z","updated_at":"2022-03-11T03:01:26.935Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/1911","max_rent":null,"max_buy":null,"max_total":58,"count_rent":3,"count_buy":1,"created_at":"2020-11-24T22:47:05.483Z","updated_at":"2021-07-01T03:07:37.711Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/tv/32/season/1","max_rent":null,"max_buy":null,"max_total":null,"count_rent":0,"count_buy":2,"created_at":"2020-07-08T02:26:41.804Z","updated_at":"2020-07-08T04:27:55.958Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/tv/13/season/1","max_rent":null,"max_buy":null,"max_total":1,"count_rent":0,"count_buy":1,"created_at":"2020-07-08T02:15:29.350Z","updated_at":"2020-07-08T02:15:29.350Z","can_rent":false,"can_buy":false,"level_rent":1,"level_buy":1},{"slug":"/film/2076","max_rent":null,"max_buy":null,"max_total":null,"count_rent":25,"count_buy":25,"created_at":"2021-02-15T00:35:43.579Z","updated_at":"2021-05-07T03:23:39.161Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/tv/41/season/1","max_rent":1,"max_buy":1,"max_total":null,"count_rent":1,"count_buy":1,"created_at":"2020-06-25T03:06:30.057Z","updated_at":"2022-05-04T03:24:51.966Z","can_rent":false,"can_buy":false,"level_rent":1,"level_buy":1},{"slug":"/bundle/47","max_rent":null,"max_buy":null,"max_total":null,"count_rent":0,"count_buy":9,"created_at":"2020-10-05T04:10:26.420Z","updated_at":"2020-10-06T20:27:37.392Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/1585","max_rent":null,"max_buy":null,"max_total":null,"count_rent":28,"count_buy":26,"created_at":"2020-11-17T21:41:48.247Z","updated_at":"2020-11-17T21:51:55.126Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/28933","max_rent":null,"max_buy":null,"max_total":500,"count_rent":12,"count_buy":35,"created_at":"2020-11-17T21:48:54.246Z","updated_at":"2021-09-16T04:48:53.442Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/bundle/10","max_rent":null,"max_buy":null,"max_total":null,"count_rent":2,"count_buy":0,"created_at":"2020-07-01T03:23:32.615Z","updated_at":"2022-05-24T05:09:57.575Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/140","max_rent":null,"max_buy":null,"max_total":null,"count_rent":18,"count_buy":12,"created_at":"2020-09-23T02:49:34.292Z","updated_at":"2020-11-17T22:09:16.890Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/36","max_rent":null,"max_buy":null,"max_total":null,"count_rent":0,"count_buy":15,"created_at":"2020-06-25T02:27:09.204Z","updated_at":"2020-11-24T22:58:52.145Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1},{"slug":"/film/1709","max_rent":null,"max_buy":null,"max_total":0,"count_rent":0,"count_buy":0,"created_at":"2021-12-01T20:01:49.173Z","updated_at":"2021-12-01T20:01:49.173Z","can_rent":false,"can_buy":false,"level_rent":1,"level_buy":1},{"slug":"/film/49","max_rent":null,"max_buy":null,"max_total":null,"count_rent":24,"count_buy":9,"created_at":"2020-07-05T20:49:52.604Z","updated_at":"2021-02-17T21:53:04.581Z","can_rent":true,"can_buy":true,"level_rent":1,"level_buy":1}]
      },
      {
                url: 'http://localhost:6006/services/pricing/v1/plans',
                method: 'GET',
                status: 200,
                response: [
                  {
                      "id": 56,
                      "name": "Premium +",
                      "status": "active",
                      "created_at": "2021-09-15T22:53:01.374Z",
                      "updated_at": "2021-10-04T00:41:52.616Z",
                      "page_id": 1187,
                      "interval": "month",
                      "interval_count": 1,
                      "description": "Premium but +",
                      "trial_period_days": null,
                      "portrait_image": null,
                      "plan_type": "recurring",
                      "expiry_date": null,
                      "landscape_image": null
                  },
                  {
                      "id": 57,
                      "name": "! 1 Amazing Pass 1 !",
                      "status": "active",
                      "created_at": "2021-10-03T23:17:04.854Z",
                      "updated_at": "2022-06-30T22:38:21.127Z",
                      "page_id": 1241,
                      "description": "Get this pass to watch some contents over lockdown!",
                      "portrait_image": null,
                      "plan_type": "free",
                      "expiry_date": "2022-08-04T19:16:00.000Z",
                      "landscape_image": null
                  },
                  {
                      "id": 65,
                      "name": "Festival winners",
                      "status": "active",
                      "created_at": "2021-10-28T20:10:54.645Z",
                      "updated_at": "2022-05-02T20:16:25.624Z",
                      "page_id": 1195,
                      "description": "List of all the winners in our film festival",
                      "portrait_image": "/images/282x422/plan/65/758f789b64c85e08ec408fbfca2af7c7.jpg",
                      "plan_type": "one_off",
                      "expiry_date": "2022-12-31T09:10:00.000Z",
                      "landscape_image": "/images/585x330/plan/65/fa33674916ad0c0d8a680ca2e235b337.jpg"
                  },
                  {
                      "id": 71,
                      "name": "RPM_Sub Weekly",
                      "status": "grandfathered",
                      "created_at": "2022-03-23T20:54:04.385Z",
                      "updated_at": "2022-05-31T04:56:23.725Z",
                      "page_id": 1235,
                      "interval": "week",
                      "interval_count": 1,
                      "description": "Grandfathered Plan\nRPM_Sub Weekly\n- RPM_SubFilm\n- RPM_Film 7",
                      "trial_period_days": null,
                      "portrait_image": "/images/282x422/plan/71/fb0d8a55caba4ae9155e07e213251b11.png",
                      "plan_type": "recurring",
                      "expiry_date": "2023-12-30T23:30:00.000Z",
                      "landscape_image": "/images/585x330/plan/71/8b5c1a7d171c9000b8c2bb015d38b0e1.png"
                  },
                  {
                      "id": 79,
                      "name": "Theo-6124",
                      "status": "active",
                      "created_at": "2022-03-31T22:52:20.928Z",
                      "updated_at": "2022-04-25T21:21:20.060Z",
                      "page_id": null,
                      "interval": "month",
                      "interval_count": 1,
                      "description": "Recurring Monthly plan",
                      "trial_period_days": 0,
                      "portrait_image": null,
                      "plan_type": "recurring",
                      "expiry_date": null,
                      "landscape_image": "/images/585x330/plan/79/17e0e8265d0e2e8a38052172d837388d.jpg"
                  },
                  {
                      "id": 80,
                      "name": "RPM_Sub Daily 2D Trial",
                      "status": "active",
                      "created_at": "2022-04-04T02:18:17.484Z",
                      "updated_at": "2022-05-31T04:52:22.965Z",
                      "page_id": 1237,
                      "interval": "day",
                      "interval_count": 1,
                      "description": "RPM_Sub Daily 2D Trial\nRPM_Curated Page Showcase Page\n- RPM_Sub Film\n- RPM_StoreFilm 6",
                      "trial_period_days": 2,
                      "portrait_image": "/images/282x422/plan/80/b5018147de0e77af0d091c6d33183b82.jpg",
                      "plan_type": "recurring",
                      "expiry_date": "2023-12-31T00:00:00.000Z",
                      "landscape_image": "/images/585x330/plan/80/f776a647c2c632fcb0a555a217438aaf.png"
                  },
                  {
                      "id": 83,
                      "name": "RPM_Subs Weekly",
                      "status": "active",
                      "created_at": "2022-04-13T05:55:59.723Z",
                      "updated_at": "2022-05-31T04:37:56.663Z",
                      "page_id": 1226,
                      "interval": "week",
                      "interval_count": 1,
                      "description": "RPM_Subs Weekly\nRPM_Curated Page-RPMStorePlan2 Showcase Page\n- RPM_Film the 4th\n- RPM_SubFilm\n- Big Buck Bunny",
                      "trial_period_days": null,
                      "portrait_image": "/images/282x422/plan/83/3dd35f05ff720a9159fbe240118508ba.png",
                      "plan_type": "recurring",
                      "expiry_date": null,
                      "landscape_image": "/images/585x330/plan/83/6a5fae676cbc45003b5986af367c8d21.png"
                  },
                  {
                      "id": 97,
                      "name": "J sub test 1",
                      "status": "active",
                      "created_at": "2022-05-03T20:45:55.853Z",
                      "updated_at": "2022-05-03T20:45:55.853Z",
                      "page_id": null,
                      "interval": "month",
                      "interval_count": 1,
                      "description": "Recurring Monthly plan",
                      "trial_period_days": 3,
                      "portrait_image": null,
                      "plan_type": "recurring",
                      "expiry_date": null,
                      "landscape_image": null
                  }
              ]
            },
            {
                    url: 'http://localhost:6006/services/pricing/v2/prices/show_multiple?items=/film/28933',
                    method: 'GET',
                    status: 200,
                    response: {
                      "prices": [
                          {
                              "item": "/film/28933",
                              "currency": "NZD",
                              "format": {
                                  "decimal_separator": ".",
                                  "thousands_separator": ",",
                                  "symbol": "$",
                                  "symbol_first": true,
                                  "decimal_places": 2
                              },
                              "rent": {
                                  "hd": "0.0",
                                  "hd_string": "$0.00",
                                  "sd": null,
                                  "sd_string": null
                              },
                              "buy": {
                                  "hd": null,
                                  "hd_string": null,
                                  "sd": null,
                                  "sd_string": null
                              },
                              "promo_only": false
                          }
                      ],
                      "plans": []
                  }
                },
                {
                  url: 'http://localhost:6006/services/content/v1/availabilities?items=/film/28933',
                  method: 'GET',
                  status: 200,
                  response: [{"slug":"/film/28933","from":"2021-04-30T12:00:00.000Z","ms_from":0,"to":"2022-09-23T12:00:00.000Z","ms_to":6270055668.535936,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/28933/bonus/1","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":true},{"slug":"/film/28933/bonus/2","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/28933/bonus/3","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/28933/bonus/5","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/28933/bonus/6","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/28933/bonus/7","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/28933/bonus/8","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1584/bonus/9","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661","from":"2022-01-12T11:00:00.000Z","ms_from":0,"to":null,"ms_to":null,"rental_duration_minutes":34560,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/10","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/11","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/12","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/13","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/14","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/15","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/16","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/8","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/film/1661/bonus/9","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":2880,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/tv/360/season/1","from":"2021-10-04T11:00:00.000Z","ms_from":0,"to":"2022-03-30T11:00:00.000Z","ms_to":0,"rental_duration_minutes":660,"rental_playback_duration_minutes":660,"requires_pin_code":false},{"slug":"/tv/360/season/1/bonus/1","from":"2021-10-04T11:00:00.000Z","ms_from":0,"to":"2022-03-30T11:00:00.000Z","ms_to":0,"rental_duration_minutes":660,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/tv/360/season/1/episode/1","from":"2021-10-04T11:00:00.000Z","ms_from":0,"to":"2022-03-31T11:00:00.000Z","ms_to":0,"rental_duration_minutes":720,"rental_playback_duration_minutes":720,"requires_pin_code":false},{"slug":"/tv/360/season/2","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":10080,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/tv/360/season/2/bonus/1","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":660,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/tv/360/season/2/episode/1","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":660,"rental_playback_duration_minutes":4320,"requires_pin_code":false},{"slug":"/tv/360/season/2/episode/2","from":null,"ms_from":null,"to":null,"ms_to":null,"rental_duration_minutes":660,"rental_playback_duration_minutes":4320,"requires_pin_code":false}]
              },
    ]
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
