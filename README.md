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

To serve content from a local build comment out [application.jet#L7](site/templates/application/application.jet#L7) and uncomment the [localhost CDN](site/templates/application/application.jet#L8). The local content must be served via http://localhost:3000 and must match the expected sources.
