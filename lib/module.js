const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-vue-select'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-vue-select.js',
    options
  })
}

module.exports.meta = require('../package.json')
