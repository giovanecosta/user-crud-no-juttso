<template>
  <div>
    <h1>View User</h1>
    <template v-if="user">
      <p>
        <strong>Name:</strong> {{user.name}}
      </p>
      <p>
        <strong>Email:</strong> {{user.email}}
      </p>
      <p>
        <strong>Phone:</strong> {{user.phone}}
      </p>
    </template>
    <el-button @click="back">Voltar</el-button>
  </div>
</template>

<style scoped>

</style>

<script>

  import { mapState } from 'vuex';

  import { Button } from 'element-ui';

  export default {
    components: {
      [Button.name]: Button
    },
    data() {
      return {};
    },
    computed: {
      ...mapState(['user']),
    },
    beforeCreate() {
      this.$store.dispatch('fetchUser', this.$route.params.id);
    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>


