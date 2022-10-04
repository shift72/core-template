export const itemLimitNotReached = {
    url: `${window.location.origin}/services/shopping/v1/item_limit`,
    method: 'GET',
    status: 200,
    response: [
        {
          "slug": "/film/3144",
          "max_rent": null,
          "max_buy": null,
          "max_total": 500,
          "count_rent": 12,
          "count_buy": 35,
          "created_at": "2020-11-17T21:48:54.246Z",
          "updated_at": "2021-09-16T04:48:53.442Z",
          "can_rent": true,
          "can_buy": true,
          "level_rent": 1,
          "level_buy": 1
        }
      ]
}

export const itemLimitReached = {
    url: `${window.location.origin}/services/shopping/v1/item_limit`,
    method: 'GET',
    status: 200,
    response: [
      {
        "slug": "/film/3144",
        "can_rent": false,
        "can_buy": false,
        "level_rent": 0,
        "level_buy": 0
    }
      ]
}
export const noItemLimits = {
    url: `${window.location.origin}/services/shopping/v1/item_limit`,
    method: 'GET',
    status: 200,
    response: []
}
