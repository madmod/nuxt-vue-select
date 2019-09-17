<template>
  <div>
    <h1>Vue Select</h1>
    <v-select :options="options" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
}
</script>
