
export const oneDevice = {
    url: `${window.location.origin}/services/content/v1/user_devices/123`,
    method: 'GET',
    status: 200,
    response: [
        {
          "id": 1,
          "friendly_name": "Friendly Desktop",
          "start_ownership_range": "2021-12-07",
          "device_type": "Desktop",
          "user_agent": "User Agent 007",
          "can_delete": true,
          "days_until_next_delete": null
        }
      ]
    }