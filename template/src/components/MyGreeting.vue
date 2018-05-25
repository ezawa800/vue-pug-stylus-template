<template lang="pug">
  p Hello, {{name}}
</template>

<style scoped>
p {
  font-size: 1.25em;
}
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
