<template>
  <div>
    <h1>Users List</h1>
    <p>
      <ul>
        <li v-for="user in userList" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </p>
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
      ...mapState(['userList']),
    },
    beforeCreate() {
      this.$store.dispatch('fetchUserList');
    },
  }
</script>
