<template lang="pug">
  p Hello, {{name}}
</template>

<style lang="stylus" scoped>
p
  font-size 1.25em
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
