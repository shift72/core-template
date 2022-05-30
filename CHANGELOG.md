# Changelog

## [Unreleased](https://github.com/shift72/core-template/compare/0.6.0...HEAD)

### Added
* Subscribe to watch button
* Bundles tagline to show n items rather than n films

### Changed
- New Jet and CSS for reusable CTA (call-to-action) buttons.  Used for consistent button appearance on film/tv/bundle pages and carousel slides.

## [0.6.0](https://github.com/shift72/core-template/compare/0.6.0-alpha.0...0.6.0)

No changes from `alpha-0`.

### Added
- Keyboard controls for the carousel.
- Pull request template file.
- Playback progress component and style
- `url` parameter in share modals

### Changed
- Reworked the carousel UI.
- Carousel background now extends the full width of the window.

### Fixed
- Remove whitespaces from mustaches variables in translations.
- Fix unwanted variables in translations.
- Sub-item CSS is no longer broken by the linter.

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
- Separator div template with `border-bottom`.  Used by app banner.
- Background image template.  Used by bundle and curated pages (so far).

### Changed
- Removed `border-bottom` from app banner.
- Atomized common elements for content and curated pages.  CSS is shared now too.

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
