# Changelog

## [Unreleased](https://github.com/shift72/core-template/compare/0.1.0-beta.2...HEAD)

### Fixed
- Prevent rollup.js from clearing console output when rebuilding.

## [0.2.0-beta.1](https://github.com/shift72/core-template/compare/0.1.0...0.2.0-beta.1) -2021-08-05

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