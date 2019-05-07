<template>
  <div>
    <div class="header">
      <h1>Users List</h1>
      <el-button
        @click="addUser"
        type="primary"
        icon="el-icon-plus">
        Add User
      </el-button>
    </div>
    <el-table
      :data="userList"
      stripe
      class="table"
      @row-click="rowClick"
    >
      <el-table-column
        fixed
        prop="name"
        label="Name"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="email"
        label="E-mail"
        min-width="200"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="Telefone"
        min-width="120"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<style scoped>

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

</style>
<script>

  import { mapState } from 'vuex';

  import { Button, Table, TableColumn } from 'element-ui';

  export default {
    components: {
      [Button.name]: Button,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
    },
    data() {
      return {};
    },
    computed: {
      ...mapState(['userList']),
    },
    beforeCreate() {
      this.$store.dispatch('fetchUserList');
    },
    methods: {
      addUser() {
        this.$router.push({ name: 'user-create' });
      },
      rowClick(row, _column, _event) {
        this.$router.push({ name: 'user-view', params: { id: row.id } });
      },
    }
  }
</script>
