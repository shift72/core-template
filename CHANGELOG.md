# Changelog

## [Unreleased](https://github.com/shift72/core-template/compare/0.3.1...HEAD)

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

### Changed
- Moved year from film/tv titles into tagline.
- Redesigned meta item tagline jet for easier development.

### Fixed
- Homepage has correct top-padding when carousel is empty.
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