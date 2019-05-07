<template>
  <div>
    <p>
      Event List
    </p>
    <ul>
      <li v-for="event in eventList" :key="event._id">
        {{ event }}
      </li>
    </ul>
  </div>
</template>
<style scoped>

</style>
<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState(['eventList']),
    },
    beforeCreate() {
      this.$store.dispatch('fetchEventList');
    },
  }
</script>
