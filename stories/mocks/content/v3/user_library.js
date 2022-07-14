export const currentlyRenting = {
  url: `${window.location.origin}/services/content/v3/user_library/123/index?sort_by=relevance`,
  method: 'GET',
  status: 200,
  response: [
    {
        "item": "/film/28933",
        "info": {
            "expiry": "2022-07-20T00:12:00.363Z",
            "quality": "hd",
            "available_from": "2020-04-17T07:00:00.000Z",
            "playback_start": null,
            "playback_end": null,
            "rental_playback_duration_minutes": 1440,
            "film_id": 28933
        },
        "playback_progress": {
            "completed": false
        }
    }
  ]
}