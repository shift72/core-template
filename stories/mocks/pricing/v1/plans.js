export const assortedPlans = {
    url: `${window.location.origin}/services/pricing/v1/plans`,
    method: 'GET',
    status: 200,
    response: [
      {
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
      },
      {
          "id": 57,
          "name": "! 1 Amazing Pass 1 !",
          "status": "active",
          "created_at": "2021-10-03T23:17:04.854Z",
          "updated_at": "2022-06-30T22:38:21.127Z",
          "page_id": 1241,
          "description": "Get this pass to watch some contents over lockdown!",
          "portrait_image": null,
          "plan_type": "free",
          "expiry_date": "2022-08-04T19:16:00.000Z",
          "landscape_image": null
      },
      {
          "id": 65,
          "name": "Festival winners",
          "status": "active",
          "created_at": "2021-10-28T20:10:54.645Z",
          "updated_at": "2022-05-02T20:16:25.624Z",
          "page_id": 1195,
          "description": "List of all the winners in our film festival",
          "portrait_image": "/images/282x422/plan/65/758f789b64c85e08ec408fbfca2af7c7.jpg",
          "plan_type": "one_off",
          "expiry_date": "2022-12-31T09:10:00.000Z",
          "landscape_image": "/images/585x330/plan/65/fa33674916ad0c0d8a680ca2e235b337.jpg"
      },
      {
          "id": 71,
          "name": "RPM_Sub Weekly",
          "status": "grandfathered",
          "created_at": "2022-03-23T20:54:04.385Z",
          "updated_at": "2022-05-31T04:56:23.725Z",
          "page_id": 1235,
          "interval": "week",
          "interval_count": 1,
          "description": "Grandfathered Plan\nRPM_Sub Weekly\n- RPM_SubFilm\n- RPM_Film 7",
          "trial_period_days": null,
          "portrait_image": "/images/282x422/plan/71/fb0d8a55caba4ae9155e07e213251b11.png",
          "plan_type": "recurring",
          "expiry_date": "2023-12-30T23:30:00.000Z",
          "landscape_image": "/images/585x330/plan/71/8b5c1a7d171c9000b8c2bb015d38b0e1.png"
      },
      {
          "id": 79,
          "name": "Theo-6124",
          "status": "active",
          "created_at": "2022-03-31T22:52:20.928Z",
          "updated_at": "2022-04-25T21:21:20.060Z",
          "page_id": null,
          "interval": "month",
          "interval_count": 1,
          "description": "Recurring Monthly plan",
          "trial_period_days": 0,
          "portrait_image": null,
          "plan_type": "recurring",
          "expiry_date": null,
          "landscape_image": "/images/585x330/plan/79/17e0e8265d0e2e8a38052172d837388d.jpg"
      },
      {
          "id": 80,
          "name": "RPM_Sub Daily 2D Trial",
          "status": "active",
          "created_at": "2022-04-04T02:18:17.484Z",
          "updated_at": "2022-05-31T04:52:22.965Z",
          "page_id": 1237,
          "interval": "day",
          "interval_count": 1,
          "description": "RPM_Sub Daily 2D Trial\nRPM_Curated Page Showcase Page\n- RPM_Sub Film\n- RPM_StoreFilm 6",
          "trial_period_days": 2,
          "portrait_image": "/images/282x422/plan/80/b5018147de0e77af0d091c6d33183b82.jpg",
          "plan_type": "recurring",
          "expiry_date": "2023-12-31T00:00:00.000Z",
          "landscape_image": "/images/585x330/plan/80/f776a647c2c632fcb0a555a217438aaf.png"
      },
      {
          "id": 83,
          "name": "RPM_Subs Weekly",
          "status": "active",
          "created_at": "2022-04-13T05:55:59.723Z",
          "updated_at": "2022-05-31T04:37:56.663Z",
          "page_id": 1226,
          "interval": "week",
          "interval_count": 1,
          "description": "RPM_Subs Weekly\nRPM_Curated Page-RPMStorePlan2 Showcase Page\n- RPM_Film the 4th\n- RPM_SubFilm\n- Big Buck Bunny",
          "trial_period_days": null,
          "portrait_image": "/images/282x422/plan/83/3dd35f05ff720a9159fbe240118508ba.png",
          "plan_type": "recurring",
          "expiry_date": null,
          "landscape_image": "/images/585x330/plan/83/6a5fae676cbc45003b5986af367c8d21.png"
      },
      {
          "id": 97,
          "name": "J sub test 1",
          "status": "active",
          "created_at": "2022-05-03T20:45:55.853Z",
          "updated_at": "2022-05-03T20:45:55.853Z",
          "page_id": null,
          "interval": "month",
          "interval_count": 1,
          "description": "Recurring Monthly plan",
          "trial_period_days": 3,
          "portrait_image": null,
          "plan_type": "recurring",
          "expiry_date": null,
          "landscape_image": null
      }
  ]
}
export const pricingV1PlansNoPlans = {
    url: `${window.location.origin}/services/pricing/v1/plans`,
    method: 'GET',
    status: 200,
    response: []
  }