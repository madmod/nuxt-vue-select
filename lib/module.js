import { resolve } from 'path'

export default function (moduleOptions) {
  const defaultOptions = {
    includeCss: true,
    ssr: false
  }

  const options = {
    ...defaultOptions,
    ...this.options['nuxt-vue-select'],
    ...moduleOptions
  }

  if (options.includeCss) {
    this.options.css = (this.options.css || []).push('vue-select/dist/vue-select.css')
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-vue-select.js',
    ssr: options.ssr,
    options
  })
}

export const meta = require('../package.json')
