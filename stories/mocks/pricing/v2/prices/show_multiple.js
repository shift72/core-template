export const singleFilmRentOnly = {
    url: `${window.location.origin}/services/pricing/v2/prices/show_multiple?items=/film/28933`,
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