module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock/register"
  ],
  "framework": "@storybook/html",
  "staticDirs": [
    '../.kibble/build',
    { from: '../.kibble/build/index.html', to: '/homepage/index.html' },
    { from: './robots.txt', to: '/robots.txt' }
  ],
  "features": {
    "previewMdx2": true,
  },
}