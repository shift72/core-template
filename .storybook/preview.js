import { addDecorator } from '@storybook/html';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

Date.prototype.addHours = function(h){
  this.setHours(this.getHours() + h);
  return this;
}

addDecorator((story, context) => {
  var elem = document.createElement('div')
  var storyElem = story();
  waitForS72Global();
  elem.appendChild(storyElem)
  return elem
});

function waitForS72Global() {
  if(typeof window.s72 !== "undefined"){
    localStorage.clear();
    sessionStorage.clear();
    localStorage["shift72.authToken"] = "1234"
    localStorage["shift72.user"] = "{\"user_id\":123}"
    s72.cfg(function(){
      return s72.i18n.load('en', 'en_AU.all.json');
    });
    s72.cfg(function(){ return s72.i18n.href.setLanguages('en', 'en'); });
    s72.boot({
      config: {"account_show_plans":"true","additional_genres":"hello","admin_allow_publish_override":"true","admin_external_page_meta_fields":"true","admin_image_root_path":"https://s72-public-assets-staging.s3.ap-southeast-2.amazonaws.com/954e2","admin_item_limits":"true","admin_meta_custom_fields":"true","admin_moviexchange_default_territory":"nz","admin_moviexchange_enabled":"true","admin_nav_section_default_reporting":"Refunds","admin_show_available_to_date":"true","admin_show_google_settings":"true","admin_show_stripe_options":"true","admin_validate_meta_licensor":"true","app_identifier_amazon":"com.shift72.browse","app_link_android":"https://play.google.com/store/apps/details?id=shift72.java.mobile.nzfc","app_link_ios":"https://itunes.apple.com/nz/app/nz-films/id895733225?mt=8","auth0_callback":"http://localhost:8080/callback.html","auth0_client_id":"sNcsvPW1xj5v2dCB5uddzbPP6RTQLrGt","auth0_domain":"dev-giro07jy.au.auth0.com","award_categories_enabled":"true","base_download_url":"https://indiereign02-a.akamaihd.net","base_url":"https://indiereign02-a.akamaihd.net","bg_image_path":"/posters-and-backdrops/1600x1100","carousel":"v2","carousel_image_path":"/posters-and-backdrops/1600x600","chromecast":"true","classification_image_path":"/posters-and-backdrops/170x70","concurrent_content_access_limit":"5","concurrent_streams_limit":"5","content_device_changes_per_period":"20","content_device_changes_period_days":"1","custom_image_types_film":"sponsor,  promo, hero","default_image_type":"portrait","delivery_policy":"urn:shift72","detail_page":"v2","device_activation_enabled":"true","device_user_limit":"5","disable_anonymous_watch_now":"true","disable_dashboard_content_schedule":"false","disable_dashboard_orphans":"false","donate_button_url":"https://homecinema.curzon.com/","encoding_profile_hd":"nzfcadaptive","episodes_in_collections":"true","feature_ads":"true","feature_plans":"true","feature_subscriptions":"true","feature_transactional":"true","foo":"false","geo_check_on_play":"true","google_analytics_id":"UA-52801023-15","google_tag_manager_id":"GTM-2578-ADJK-AF832","header_image_path":"/posters-and-backdrops/1200x422","heartbeat_freq":"30","heartbeat_tolerance":"2","hls_manifest_service":"false","image_root_path":"https://d1ho4360zp6ihx.cloudfront.net/954e2","ingestion_manager_version":"3","is_live":"false","landscape_poster_path":"/posters-and-backdrops/585x330","licensors":"true","licensors_transactions":"true","media_item_caption":"true","media_item_caption_genres_count":"3","minimum_purchase_age":"21","mp4_fallback":"true","paypal_env":"sandbox","perform_cc_country_check":"false","pin_codes_enabled":"true","plans_returned_as_library":"both","playback_disable_firefox":"false","playback_disable_macos_widevine":"false","playback_show_shift_logo":"https://www.shift72.com","player_allow_mobile_drm_content":"true","player_resume":"true","portrait_poster_path":"/posters-and-backdrops/282x422","promo_only_enabled":"true","release_window_prices":"true","release_window_scheduling":"true","rental_duration_minutes":"10080","rental_playback_duration_minutes":"4320","rental_redeem_period":"7","required_dob":"true","required_dob_and_gender":"true","required_gender":"false","sd":"true","search_disabled":"false","season_name":"Series","seo_image_path":"/posters-and-backdrops/1200x628","seo_site_keywords":"Shift72, Demo, On Demand, KeywordsInnit","seo_site_name":"Site Name????","seo_title_prefix":"S72 STG STORE |","seo_title_suffix":"| Watch On Demand","show_facebook_share":"true","show_linkedin_share":"true","show_twitter_share":"false","signup_dob":"true","signup_dob_and_gender":"true","signup_email_optin":"true","signup_gender":"true","signup_terms_checkbox":"true","sso_enabled":"false","stripe_capture_postcode":"true","stripe_pk":"pk_test_9DCLR1qAafimUicEZNNXLawu","subscribe_to_watch":"true","telemetry_freq":"20","terms-and-conditions-url":"http://www.1112.net/lastpage.html","trailer_pin_codes_enabled":"true","upload":"true","user_analytics":"true","user_password_reset_link_format":"https://%{domain}/resetpassword.html?id=%{id}\u0026token=%{token}","user_pin_code_length":"4","wishlist_enabled":"true"},
      toggles: {"admin_add_external_pages":true,"admin_add_report_streams":true,"admin_add_report_time_watched":true,"admin_bg_image":true,"admin_bundles":true,"admin_carousel_image":true,"admin_cookie_consent":true,"admin_delete_meta":true,"admin_invite_admins":true,"admin_journal":true,"admin_live_events":true,"admin_meta_custom_fields":true,"admin_moviexchange_search":true,"admin_page_images":true,"admin_publishing_workflow":true,"admin_recommendation_collections":true,"admin_report_activity":true,"admin_report_credits":true,"admin_report_engagement":true,"admin_report_ingestions":true,"admin_report_streamers":true,"admin_seo_image":true,"admin_tags_editable":true,"admin_user_delete":true,"admin_user_devices":true,"admin_user_plans":true,"admin_v2":true,"classifications_enabled":true,"disable_sitemap":true,"donate_button":true,"element_switcher_enabled":true,"frontend_cookie_consent":true,"global_classification_enabled":true,"item_delivery_policy":true,"kibble":true,"language_selector":true,"meta_exclude_default_image_types":false,"plan_items_geoblock":true,"plan_items_geoblockss":false,"refund_disabled":false,"revenue_splits_extra_details":true,"saved_cards":true,"self_service_css":false,"self_service_site_images":true,"shopping_wizard":true,"show_social_settings":true,"show_user_stream_quality":true,"simple-mde-editor":true,"site_translations_api":false,"tax_settings":true,"tv_bonus_content":true,"uploader_v2":true,"use_new_license_server":true,"use_post_payment_worker":true,"user_invite":true},
      languages: [{"code":"","name":"English","label":"","locale":""}]
    });
  } else {
    setTimeout(waitForS72Global, 250);
  }
}