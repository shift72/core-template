# Changelog

## [Unreleased](https://github.com/shift72/core-template/compare/1.9.8...HEAD)

### Added

### Changed
- Update the checkout embed to suit latest version, and to pass through urls
- Add flags in `application.jet` to switch on local dev options for relish and
  checkout.

### Fixed

## [1.9.8](https://github.com/shift72/core-template/compare/1.9.7...1.9.8)

### Fixed

- Bug with android tv app logo on Chrome

## [1.9.7](https://github.com/shift72/core-template/compare/1.9.6...1.9.7)

### Added

- New Checkout support

### Changed

- Updated Twitter share and footer logo

### Fixed

- Plans page alignment

## [1.9.6](https://github.com/shift72/core-template/compare/1.9.5...1.9.6)

### Added

- Facebook / meta pixel support
- Ability to disable letterboxd share
- Translations for new checkout 'watch from' button

### Changed

- Updated branding for Google Play / Android TV
- Small carousel styling tweaks

## [1.9.5](https://github.com/shift72/core-template/compare/1.9.4...1.9.5)

### Changed

- Slider arrows code refactor and add css variable to change arrow color.

## [1.9.4](https://github.com/shift72/core-template/compare/1.9.3...1.9.4)

### Added

- external purchase CTA button (based on custom fields)
- page for signing users in across domains

## [1.9.3](https://github.com/shift72/core-template/compare/1.9.2...1.9.3)

### Added

- Show character names next to actors if populated. Can be disabled with feature toggle site_hide_cast_character_name

## [1.9.2](https://github.com/shift72/core-template/compare/1.9.1...1.9.2)

### Added

- Configuration to change or remove the forgot password link
- Configuration to change or remove the my account link
- Styling for SSO buttons
- CSS variables for change default button colors
- linkedin social link

### Changed

- Nav mobile top padding to meet design spec
- Social link redesign

### Fixed

- GA4 tracking of ecommerce data
- Form control styling bug in 1.9.1

## [1.9.1](https://github.com/shift72/core-template/compare/1.9.0...1.9.1)

### Changed

- Bumped base version of relish to 1.4.x

## [1.9.0](https://github.com/shift72/core-template/compare/1.8.0...1.9.0)

### Added

- Support for Relish email verification

### Fixed

- Border radius for longer width buttons

## [1.8.0](https://github.com/shift72/core-template/compare/1.7.0...1.8.0)

### Added

- CSS for the new purchase flow.
- Social links in the footer.
- TV app banners in the footer.

### Fixed

- Links to specific episodes from collections (inc homepage carousel).
- 60 mins runtime now shows as 1h 0m.

## [1.7.0](https://github.com/shift72/core-template/compare/1.6.0...1.7.0)

### Added

- Bonus content and episode show/hide component.

### Changed

- Modified powered_by_url translations.
- Various spacing style changes.

### Fixed

- Pricing buttons no longer get squashed in Firefox.
- Spacing issues on small screens.

## [1.6.0](https://github.com/shift72/core-template/compare/1.5.1...1.6.0)

### Added

- AB#9564 Live label to film detail page and carousel with translations.
- AB#9361 Translations for live events, poster live availability status styling changes
- Translations for live event purchase flow.
- Translations for credit card validation errors.
- Translations for new card timing out error.
- Award categories moved to above film description

### Fixed

- Inline cta buttons now grow when text is wider than button width.
- TV season detail page layout now matches film detail page layout.
- Trailer autoplay disabled for CTA buttons in homepage carousel.

### Fixed

- Gap below page-collections consistent with sliders
- Made item-collections similar in structure and style to sliders, renamed accordingly

### Fixed

- Bundle page style regression

## [1.5.1](https://github.com/shift72/core-template/compare/1.5.0...1.5.1)

## Changed

- Revert relish version to 1.3 from latest

## [1.5.0](https://github.com/shift72/core-template/compare/1.4.0...1.5.0)

### Added

- Translations for discount errors

## Changed

- Spacing between components AB#9013

### Fixed

- Default language now gets set either by site record or kibble.json depending on if DB translations are enabled AB#9675
- Fixed incorrect Portuguese translation for shopping success

## [1.4.0](https://github.com/shift72/core-template/compare/1.3.0...1.4.0)

### Added

- Add new variables to change the font sizes and letter spacing of headings, subtitles, body text, etc.
- Add translations for intervals without counts
- New keys for translations that were used by Relish and Core-template removing their overlapping usage
- Add translation for `shopping_error_card_not_supported`, `shopping_error_processing_error` and `shopping_error_invalid_session_token`
- Added support for self-service CSS and brand images.
- Added support for carousel_play_speed and carousel_fade_time configs.
- Added support to toggle on cloudsearch via Meta > cloudsearch feature toggle.

## Changed

- Moved the carousel availability label above the CTA's.
- The site url in kibble.json now points to [tvoddemo.shift72.com](https://tvoddemo.shift72.com).
- Full width background image and gradient on meta detail pages
- Various links and buttons now use new colour variables.
- Translations refer to "CVC" rather than "CVV" at payment stage

### Fixed

- Broken share modal styles.
- Fixed translation for plan frequency in plans.html
- Added Intl to polyfill to catch iOS devices.
- Film detail page element switcher uses grid instead of flex with gap.

## [1.3.0](https://github.com/shift72/core-template/compare/1.3.0-alpha...1.3.0)

No changes from `alpha-0`.

## [1.3.0-alpha.0](https://github.com/shift72/core-template/compare/1.2.0...1.3.0-alpha.0)

### Added

- Add translations for subscription recurrence on purchase CTA.
- Add translations for more friendlier stripe & error messages. (`stripe_card_not_supported`, `something_bad_happened`).

### Fixed

- Spinner not rotating.

## [1.2.0](https://github.com/shift72/core-template/compare/1.2.0-alpha.0...1.2.0)

No changes from `alpha-0`.

## [1.2.0-alpha.0](https://github.com/shift72/core-template/compare/1.1.0...1.2.0-alpha.0)

### Added

- Tooltips on meta detail/item CTA buttons.
- Language strings changed for `shopping_complete_promo_only`.
- Text label on save credit card component changed to "Add new card".
- Grouped carousel awards component with sponsor logo.
- Separate translations for plans, subscriptions
- Play button i18n changed to 'Watch now' instead of 'Play now'

### Changed

- Taglines refactored with new DOM structure.
- Language strings for usersubscriptions_unsubscribe_modal_cancel and usersubscriptions_unsubscribe_modal_confirm

## [1.1.0](https://github.com/shift72/core-template/compare/1.0.0...1.1.0)

### Added

- Language strings for `shopping_card_update_reason_expired`.
- Carousel images can now be positioned via variables.

### Changed

- Awards icon from star to laurel.
- Meta detail page poster width, layout direction, spacing between nav and start of content adjusted at different breakpoints.
- Show play and pricing buttons based on item type on `meta_item.jet`.
- Carousel height now scales based on browser window height.
- Fix font weight on the `can-be-watched button` to match primary button styling.
- Replaces `nav_homepage` and` site_owner` translations with dynamic data via Kibble function.
- Carousel heading is limited to a maximum of 3 lines.

## [1.0.0](https://github.com/shift72/core-template/compare/1.0.0-alpha.0...1.0.0)

No changes from `alpha-0`.

## [1.0.0-alpha.0](https://github.com/shift72/core-template/compare/0.6.0...1.0.0-alpha.0)

### Added

- Subscribe to watch button.
- Bundles tagline to show _n_ items rather than _n_ films.
- Keyboard controls for the carousel.
- Pull request template file.
- Playback progress component and style.
- `url` parameter in share modals.

### Changed

- New Jet and CSS for reusable CTA (call-to-action) buttons. Used for consistent button appearance on film/tv/bundle pages and carousel slides.
- Reworked the carousel UI.
- Carousel background now extends the full width of the window.

### Fixed

- Remove whitespaces from mustaches variables in translations.
- Fix unwanted variables in translations.
- Sub-item CSS is no longer broken by the linter.

## [0.6.0](https://github.com/shift72/core-template/compare/0.6.0-alpha.0...0.6.0)

No changes from `alpha-0`.

## [0.6.0-alpha.0](https://github.com/shift72/core-template/compare/0.5.1...0.6.0-alpha.0)

### Added

- If the signed in user has plans to show, they will now be visible in `subscriptions.html.jet` with a link from "My Subscriptions" in the menu.
- Styling and translations to support SVOD subscriptions.
- `.nvmrc` to pin versions of Node/NPM.
- Developer tool to fetch translations from Google Translate.
- Social media buttons replaced with share modal.
- Relish now loads the `urlmap.json`.
- Sponsor image in carousel and meta detail.

### Changed

- Default Font Awesome removed. A trimmed icons file is now in `fa-s72.woff` being used by `_icons.scss`.
- Styling changes to awards and availability label/status.

### Fixed

- Removed some redundant wishlist CSS.
- Improved and translated element switcher.
- Removed suffixed `plan` from subscription translations.
- Changed incorrect language code for Estonia.
- Donate button hover color.
- Google scripts respect cookie consents and only load when accepted.

## [0.5.1](https://github.com/shift72/core-template/compare/0.5.0...0.5.1)

### Changed

- Upgrade to kibble `0.16.7`.

### Fixed

- Sentence casing for `en_AU` translation about passes.

## [0.5.0](https://github.com/shift72/core-template/compare/0.4.4...0.5.0)

### Added

- Start the site with an admin build: `npm start --admin`.
- Added Core template version to `<head>` and `kibble.json`.
- Added styling for floating donate button to use button sass variables.
- A bunch of missing language keys across language files.
- Automated translation command.

### Changed

- Upgrade to kibble `0.16.6`.
- Moved references from `film.Images` to `film.ImageMap`.
- Removed minimum page height from content pages.
- Moved skip link above cookie consent banner

### Changed

- Upgrade to kibble `0.16.6`.
- Moved references from `film.Images` to `film.ImageMap`.
- Removed minimum page height from content pages.
- Moved skip link above cookie consent banner

### Fixed

- Can now override the cookie consent styling.
- Can now send analytics data to both GA4 and UA Legacy google analytics (GA4 previously not supported).

## [0.4.4](https://github.com/shift72/core-template/compare/0.4.3...0.4.4)

### Added

- Awards categories.

### Fixed

- Fixed obsolete `$primary` var for trailer button.

## [0.4.3](https://github.com/shift72/core-template/compare/0.4.2...0.4.3)

### Added

- Awards categories.
- Floating donate button.
- External custom CSS link in head.
- Scripts for downloading/uploading custom CSS files for use with local development.

### Changed

- Replaced various Sass variables with CSS variables.
- Added workarounds for Sass and Bootstrap functions that don't understand CSS variables.
- Kibble `0.16.4`.
- Split CC and Subtitles.
- Moved engagement icons.

## [0.4.2](https://github.com/shift72/core-template/compare/0.4.1...0.4.2)

### Added

- Lang files updated with entries for purchasing one-off passes.
- Sponsor banner.

### Fixed

- Typo in English language file.

## [0.4.1](https://github.com/shift72/core-template/compare/0.4.0...0.4.1)

### Added

- Fixed layout issue with TV Season detail page.
- Support for header images on content pages.

## [0.4.0](https://github.com/shift72/core-template/compare/0.4.0-rc.0...0.4.0)

No changes from RC0.

## [0.4.0-rc.0](https://github.com/shift72/core-template/compare/0.3.8...0.4.0-rc.0)

### Added

- Support for purchasing plans and pages to showcase them.
- Support for award nominations on carousel, meta item partials and film pages.
- Separate template for overriding with custom fonts.

### Changed

- Moved separator line from footer jet into app badge jet.
- Kibble upgraded to `0.15.22`.
- Application templates moved to `/site/templates/application/`.
- Links (`<a>` tags) without a `class` attribute have `text-decoration: underline`.

### Fixed

- Curated pages with a collection no longer has a `min-height` that was forcing a gap before the collection.

## [0.3.8](https://github.com/shift72/core-template/compare/0.3.7...0.3.8)

### Fixed

- Genre limit on meta-item-tagline now works again.
- Typo in English translations file.

## [0.3.7](https://github.com/shift72/core-template/compare/0.3.6...0.3.7)

### Added

- Separator div template with `border-bottom`. Used by app banner.
- Background image template. Used by bundle and curated pages (so far).

### Changed

- Removed `border-bottom` from app banner.
- Atomized common elements for content and curated pages. CSS is shared now too.

### Fixed

- The Sass variables for setting the logo size (`$navbar-brand-min-width-md`/`$navbar-brand-min-width-lg`) are now used for their respective breakpoints.
- List left/right padding now changes at the correct breakpoint (`lg` instead of `md`).
- Curated page text content now has a maximum width to mirror behaviour of content page text content.
- Addressed npm audit vulnerabilities.

## [0.3.6](https://github.com/shift72/core-template/compare/0.3.5...0.3.6)

### Fixed

- Purchase modal duration values fixed for every language.

## [0.3.5](https://github.com/shift72/core-template/compare/0.3.4...0.3.5)

### Fixed

- Nav vertical line is now hidden when search and language selector are both disabled.
- Decoupled footer and accept invite header language variables.
- Added missing rental duration language variables.

## [0.3.4](https://github.com/shift72/core-template/compare/0.3.3...0.3.4)

### Changed

- Swapped Letterboxd social share icon for a different one.

## [0.3.3](https://github.com/shift72/core-template/compare/0.3.2...0.3.3)

### Added

- Added Catalan (`ca_ES`) translations file.

## [0.3.2](https://github.com/shift72/core-template/compare/0.3.1...0.3.2)

### Fixed

- Nav vertical line margins now on both sides.
- Modal trailer margins.

### Fixed

- html tags were not being escaped in some places

### Changed

- Moved year from film/tv titles into tagline.
- Redesigned meta item tagline jet for easier development.

### Fixed

- Homepage has correct top-padding when carousel is empty.

## [0.3.1](https://github.com/shift72/core-template/compare/0.3.0-beta.4...0.3.1)

### Added

- Added Letterboxd social button.

### Changed

- Targeting Kibble 0.15.19.

### Fixed

- Signout button text colour now matches body text colour.

## [0.3.0-beta.4](https://github.com/shift72/core-template/compare/0.3.0-beta.3...0.3.0-beta.4)

### Added

- App badges now display automatically when configured in Uber Admin.
- Added Brazilian Portuguese (`pt_BR`) translations file.

### Fixed

- Carousel tagline now uses theme colour.
- Signin button on VIP sites now has primary button styling.
- Padding for pages is now consistent.

## [0.3.0-beta.3](https://github.com/shift72/core-template/compare/0.3.0-beta.2...0.3.0-beta.3) - 2021-09-06

### Changed

- Removed redundant supported devices json file.

## [0.3.0-beta.2](https://github.com/shift72/core-template/compare/0.3.0-beta.1...0.3.0-beta.2) - 2021-09-06

### Fixed

- Padding issue between wishlish and trailer buttons.
- Tablet menu overlay now supports light theme.
- Navigation height bug when increasing window size.
- Tablet navbar brand now relatively positioned.

### Changed

- Changed primary button font weight from bold to normal.
- Changed cookie banner accept button translations.

## [0.3.0-beta.1](https://github.com/shift72/core-template/compare/0.2.0-beta.1...0.3.0-beta.1) - 2021-08-13

### Added

- Added Croatian (`hr_HR`) translations file.

### Fixed

- The sign out button can now be selected with keyboard controls.
- Prevent rollup.js from clearing console output when rebuilding.
- Headed banner height replaced with min-height.
- Removed hardcoded English minutes reference in tagline.

### Changed

- Changed from Node Sass to Dart Sass.
- Improved linter rule sets.
- Major refactor of JS and SCSS files.
- Subnav dropdown width increased for mobile.

## [0.2.0-beta.1](https://github.com/shift72/core-template/compare/0.1.0...0.2.0-beta.1) - 2021-08-05

### Added

- Added Stylelint, Prettier, and ESLint.
- Added Node.js CI for Github Actions.
- Added header banner.
- Added app store badges.
- Added Arabic (`ar_LB`) translations file.
- Added Taiwanese Chinese (`zh_TW`) translations file.

### Changed

- Targeting Kibble 0.15.18.
- Strip HTML on taglines.

### Fixed

- Added missing focus rings to language selector.
- Error message background colour is now red.
- Body background accent colour is determined by body background.

## [0.1.0](https://github.com/shift72/core-template/compare/0.1.0-beta-2...0.1.0) - 2021-07-16

### Added

- Added new searchbar behaviour:
  - For all breakpoints, the search is collapsed by default until the magnifying glass is selected.
  - For desktop, a small input is shown when selected.
  - For tablet and mobile, a full width input is shown when selected.
- Tablet breakpoint for the navigation.
- Variables for link colour on the cookie banner.

### Changed

- Converted the header layout to flexbox.
- Dropdowns for navigation and user account actions in the mobile menu are now collapsed by default.
- English (`en_AU`) translations for TV Series changed to Season.

### Fixed

- Bundle page content is now left aligned.
- Removed underline from carousel arrows.
- Polish (`pl_PL`) Polskie renamed to Polski.

## [0.1.0-beta.2](https://github.com/shift72/core-template/compare/0.1.0-alpha.1...0.1.0-beta.2) - 2021-06-28

### Changed

- Greek translations for shopping info.

### Fixed

- Footer logo is now centered in IE11.

## [0.1.0-beta.1](https://github.com/shift72/core-template/compare/0.1.0-alpha.4...0.1.0-beta.1) - 2021-06-21

### Added

- HTML landmarks, skip links and ARIA labels for screenreader support.

### Changed

- Hyperlink underlines for accessibility.
- Updated the footer design and added more extensiblity options.

### Fixed

- Heading hierachies for accessibility.
- Increased legibility on headings, tag lines, navigation and classifications.
- Bundles now check for the `media_item_caption` config before rendering the HTML for it.
- Datepicker now fits on smaller screens.

## [0.1.0-alpha.4](https://github.com/shift72/core-template/compare/0.1.0-alpha.3...0.1.0-alpha.4) - 2021-06-02

Repackage of `0.1.0-alpha.3`.

## [0.1.0-alpha.3](https://github.com/shift72/core-template/compare/0.1.0-alpha.2...0.1.0-alpha.3) - 2021-06-02

Note: packaging fail so fixes are in `0.1.0-alpha.4`.

### Fixed

- Live event buttons now stack vertically on list collection items.
- Better screenreader support on social buttons.

## [0.1.0-alpha.2](https://github.com/shift72/core-template/compare/0.1.0-alpha.1...0.1.0-alpha.2) - 2021-05-28

### Added

- German (`de_De`), English (`en_AU`), Spanish (`es_ES`), French (`fr_FR`) and Italian (`it_IT`) translations for Giropay payment option.
- New base Finnish (`fi_FI`) translation.

### Changed

- Logos were replaced with generic options, knowing that sites will override with client-specific logos. The navbar CSS was adjusted to accomodate the new logos.

### Fixed

- The fallback `iframe` for Google Tag Manager now has a `title` attribute applied for WCAG compliance.

## [0.1.0-alpha.1](https://github.com/shift72/core-template/releases/tag/0.1.0-alpha.1) - 2021-05-24

### Added

- Initial release of NPM package.
