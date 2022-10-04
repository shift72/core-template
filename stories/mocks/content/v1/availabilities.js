export const availableNowUntilIndefinate = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
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
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
        "from": `${new Date().addHours(48).toISOString()}`,
    }]
}

export const availableIn24Hours = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
        "from": `${new Date().addHours(24).toISOString()}`,
        "ms_from": 0,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}

export const availableIn3Hours = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
        "from": `${new Date().addHours(3).toISOString()}`,
        "ms_from": 0,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}


export const availableIn1Hour = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
        "from": `${new Date().addHours(1).toISOString()}`,
        "ms_from": 0,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}
export const availableIn8Days = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
        "from": `${new Date().addHours(24 * 8).toISOString()}`,
        "ms_from": 0,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false
    }]
}

export const availableNowUntil48Hours = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
        "from": `${new Date().toISOString()}`,
        "ms_from": 0,
        "to": `${new Date().addHours(48).toISOString()}`,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440,
        "requires_pin_code":false,
        "recurringPlans":[      {
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
        }]
    }]
}

export const expired48HoursAgo = {
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
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
    url: `${window.location.origin}/services/content/v1/availabilities?items=/film/3144`,
    method: 'GET',
    status: 200,
    response: [{
        "slug": "/film/3144",
        "from": null,
        "ms_from": null,
        "to": null,
        "ms_to": null,
        "rental_duration_minutes": 8640,
        "rental_playback_duration_minutes": 1440
    }]
}
