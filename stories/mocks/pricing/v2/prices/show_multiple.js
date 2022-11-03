export const singleFilmRentableInYourRegion = {
    url: `${window.location.origin}/services/pricing/v2/prices/show_multiple?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: {
      "prices": [
          {
              "item": "/film/3144",
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
                  "hd_string": "$5.00",
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
  }

  export const singleFilmBuyableAndRentableInYourRegion = {
    url: `${window.location.origin}/services/pricing/v2/prices/show_multiple?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: {
      "prices": [
          {
              "item": "/film/3144",
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
                  "hd_string": "$5.00",
                  "sd": null,
                  "sd_string": null
              },
              "buy": {
                  "hd": "0.0",
                  "hd_string": "$5.00",
                  "sd": null,
                  "sd_string": null
              },
              "promo_only": false
          }
      ],
      "plans": []
  }
  }

  export const singleFilmBuyableInYourRegion = {
    url: `${window.location.origin}/services/pricing/v2/prices/show_multiple?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: {
      "prices": [
          {
              "item": "/film/3144",
              "currency": "NZD",
              "format": {
                  "decimal_separator": ".",
                  "thousands_separator": ",",
                  "symbol": "$",
                  "symbol_first": true,
                  "decimal_places": 2
              },
              "rent": {
                  "hd": null,
                  "hd_string": null,
                  "sd": null,
                  "sd_string": null
              },
              "buy": {
                  "hd": "0.0",
                  "hd_string": "$5.00",
                  "sd": null,
                  "sd_string": null
              },
              "promo_only": false
          }
      ],
      "plans": []
  }
  }

  export const noPricesInYourRegion = {
    url: `${window.location.origin}/services/pricing/v2/prices/show_multiple?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: {
      "prices": [],
      "plans": []
  }
  }

  export const singleFilmBelongsToSingleRecurringPlan = {
    url: `${window.location.origin}/services/pricing/v2/prices/show_multiple?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: {
      "prices": [],
      "plans":[
        {"item":"/film/3144","plans":["/plan/80"]},
    ]
  }
  }