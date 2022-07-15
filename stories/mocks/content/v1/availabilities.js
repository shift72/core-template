Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

export const availableNowUntilIndefinate = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/28933`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/28933",
        "from": `${new Date().toISOString()}`,
        "ms_from": 0,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}

export const availableIn48Hours = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/28933`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/28933",
        "from": `${new Date().addHours(48).toISOString()}`,
        "ms_from": 0,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}
export const availableNowUntil48Hours = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/28933`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/28933",
        "from": `${new Date().toISOString()}`,
        "ms_from": 0,
        "to": `${new Date().addHours(48).toISOString()}`,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}

export const expired48HoursAgo = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/28933`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/28933",
        "from": `${new Date(-96).toISOString()}`,
        "ms_from": 0,
        "to": `${new Date().addHours(-48).toISOString()}`,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}

export const noAvailabilitySet =   {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/28933`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/28933",
        "from": null,
        "ms_from": null,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440
    }]
}
