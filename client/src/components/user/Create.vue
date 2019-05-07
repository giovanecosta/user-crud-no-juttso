<template>
  <div>
    <h1>Create User</h1>
    <el-form
      class="create-form"
      ref="form"
      :model="user"
      :rules="rules"
      label-width="10px"
      label-position="top"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="confirmPassword">
        <el-input type="password" v-model="user.confirmPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm('form')">Submit</el-button>
      <el-button @click="resetForm('form')">Reset</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<style>
  .create-form {
    margin: 0 auto;
    max-width: 600px;
  }

  .el-form--label-top .el-form-item__label {
    line-height: unset !important;
  }

</style>

<script>

  import { Button, DatePicker, Form, FormItem, Input } from 'element-ui';

  export default {
    components: {
      [Button.name]: Button,
      [DatePicker.name]: DatePicker,
      [Form.name]: Form,
      [FormItem.name]: FormItem,
      [Input.name]: Input,
    },
    data() {
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.user.confirmPassword !== '') {
            this.$refs.form.validateField('confirmPassword');
          }
          callback();
        }
      };
      var confirmPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the same password'));
        } else if (value !== this.user.password) {
          callback(new Error('Two passwords don\'t match!'));
        } else {
          callback();
        }
      };

      return {
        user: {
          name: null,
          email: null,
          phone: null,
          password: null,
        },
        rules: {
          name: [
            { required: true, message: 'Please input User name', trigger: 'blur' },
            { min: 3, max: 50, message: 'Length should be 3 to 50', trigger: 'blur' },
          ],
          email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
          ],
          phone: [
            { required: true, message: 'Please input Phone', trigger: 'blur' },
            { min: 11, max: 15, message: 'Length should be 11 to 15', trigger: 'blur' },
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' },
            { min: 8, message: 'Length should be 8 at least', trigger: 'blur' },
          ],
          confirmPassword: [
            { validator: confirmPassword, trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.user.confirmPassword = null;
            this.$store.commit('addUser', this.user);
            this.$notify.success({
              message: 'User succefully created!',
            });
            this.$router.push({ name: 'user-list' });
          } else {
            this.$notify.error({
              message: 'Please, verify form data!',
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  }
</script>


