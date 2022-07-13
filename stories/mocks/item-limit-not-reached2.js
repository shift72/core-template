export const itemLimitNotReached2 = {
    url: `${window.location.origin}/services/shopping/v1/item_limit`,
    method: 'GET',
    status: 200,
    response: [
      {
        "slug": "/film/28933",
        "can_rent": false,
        "can_buy": false,
        "level_rent": 1,
        "level_buy": 1
    }
      ]
}
