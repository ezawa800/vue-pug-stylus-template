<template lang="pug">
  .content
    router-link(to='/child') Go to child
    MyGreeting(:name='appName')
</template>

<script>
import { mapGetters } from 'vuex'
import MyGreeting from '@/components/MyGreeting.vue'

export default {
  components: {
    MyGreeting
  },
  computed: {
    ...mapGetters(['appName'])
  }
}
</script>

<style scoped>

</style>
