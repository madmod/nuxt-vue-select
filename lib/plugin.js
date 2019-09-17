import Vue from 'vue'
import vSelect from 'vue-select'

export default async function ({ router, store }) {
  Vue.component('v-select', vSelect)
}
