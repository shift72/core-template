const HtmlWebpackPlugin = require('html-webpack-plugin')


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
  "staticDirs": ['../.kibble/build'],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    // config.entry = config.entry.filter(singleEntry => {
    //   return !singleEntry.includes('/webpack-hot-middleware/')})

    //   config.plugins = config.plugins.filter(plugin => {
    //    return  plugin.constructor.name !== 'HotModuleReplacementPlugin'
    //   })

    //   config.plugins = config.plugins.map(plugin => {
    //     console.log(plugin.constructor.name );
    //     if (plugin.constructor.name == 'HtmlWebpackPlugin') {
    //       plugin.options.cache = false
    //     }
    //     return plugin
    //    })

    return config;
  }
}