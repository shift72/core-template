
export const noPlaybackProgress = {
    url: `${window.location.origin}/services/content/v1/playback_progress/123`,
    method: 'GET',
    status: 200,
    response: []
}


export const playbackProgressExists = {
    url: `${window.location.origin}/services/content/v1/playback_progress/123`,
    method: 'GET',
    status: 200,
    response: [
        {
            "play_position": 50,
            "length": 123,
            "item": "/film/3144",
            "completed": false,
            "last_played_at": null
        }
    ]
}