<template>
  <div class="view">
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
    <el-button @click="back">Back</el-button>
    <el-button type="primary" icon="el-icon-edit" @click="edit">Edit</el-button>
    <el-button type="danger" icon="el-icon-delete" @click="destroy">Delete</el-button>

    <el-dialog
      title="Delete"
      :visible.sync="deleteDialogVisible"
    >
      <span>Are you sure?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">Cancel</el-button>
        <el-button type="danger" @click="confirmDestroy">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style scoped>

  .view {
    margin: 0 auto;
    max-width: 600px;
  }
</style>

<script>

  import { mapState } from 'vuex';

  import { Button, Dialog } from 'element-ui';

  export default {
    components: {
      [Button.name]: Button,
      [Dialog.name]: Dialog,
    },
    data() {
      return {
        deleteDialogVisible: false,
      };
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
      },
      edit() {
        this.$router.push({ name: 'user-edit', params: { id: this.$route.params.id }});
      },
      destroy() {
        this.deleteDialogVisible = true;
      },
      confirmDestroy() {
        this.$store.commit('deleteUser', this.$route.params.id);
        this.$notify.success({
          message: 'User succefully deleted!',
        });
        this.deleteDialogVisible = false;
        this.back();
      }
    }
  }
</script>


