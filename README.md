This template supports the following features:

* Films
* Bundles
* Pages
* Template only pages (robots.txt and sitemap.txt are examples)
* Internationalization

## Getting started

 * `npm install`
 * `npm start` will build and start the site in watch mode

## Running local content

To use a local version of relish, update [application.jet](site/templates/application/application.jet) to set the CDN to: `{{CDN := "//localhost:3000"}}`.
