export const currentlyRenting = {
  url: `${window.location.origin}/services/content/v3/user_library/123/index?sort_by=relevance`,
  method: 'GET',
  status: 200,
  response: [
    {
        "item": "/film/123",
        "info": {
            "expiry": `${new Date().addHours(24*7).toISOString()}`,
            "quality": "hd",
            "available_from": "2020-04-17T07:00:00.000Z",
            "playback_start": null,
            "playback_end": null,
            "rental_playback_duration_minutes": 1440,
            "film_id": 123
        },
        "playback_progress": {
            "completed": false
        }
    }
  ]
}

export const startedWatchWindow = {
  url: `${window.location.origin}/services/content/v3/user_library/123/index?sort_by=relevance`,
  method: 'GET',
  status: 200,
  response: [
    {
        "item": "/film/123",
        "info": {
            "expiry": `${new Date().addHours(6).toISOString()}`,
            "quality": "hd",
            "available_from": "2020-04-17T07:00:00.000Z",
            "playback_start": null,
            "playback_end": null,
            "rental_playback_duration_minutes": 1440,
            "film_id": 123
        },
        "playback_progress": {
            "completed": false
        }
    }
  ]
}

export const emptyLibrary = {
  url: `${window.location.origin}/services/content/v3/user_library/123/index?sort_by=relevance`,
  method: 'GET',
  status: 200,
  response: []
}