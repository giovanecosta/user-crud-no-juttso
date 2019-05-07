<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <h1 class="heading" @click="goHome"> User CRUD no Juttso </h1>
        <el-dropdown @command="handleMenu">
          <i class="el-icon-menu menu"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="">Home</el-dropdown-item>
            <el-dropdown-item command="users">Users</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer class="footer">
        An Admission Test by Giovane Costa - 2019
      </el-footer>
    </el-container>

  </div>
</template>

<style scoped>
  #app {
    display: flex;
    width: 100%;
  }

  .menu {
    color: white;
    cursor: pointer;
    font-size: 30px;
  }

  .heading {
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header, .footer {
    background-color: #1dafe0;
    color: white;
    display: flex;
  }

  .header {
    align-items: center;
    justify-content: space-between;
  }

  .footer {
    font-size: 13px;
    line-height: 58px;
    justify-content: center;
  }
</style>

<script>


  import { Button, Container, Dropdown, DropdownItem, DropdownMenu, Footer, Header, Main  } from 'element-ui';

  export default {
    name: 'app',
    components: {
      [Button.name]: Button,
      [Container.name]: Container,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Footer.name]: Footer,
      [Header.name]: Header,
      [Main.name]: Main,
    },
    methods: {
      goHome() {
        this.$router.push({ path: '/' });
      },
      handleMenu(command) {
        this.$router.push({ path: `/${command}` });
      }
    }
  }
</script>
