import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export const mutations = {
  async addUser(state, user) {
    const res = await axios.post(
      'http://localhost:8080/graphql', {
      query: `
        mutation addUser($name: String!, $email: String!, $password: String!, $phone: String!) {
          addUser(name: $name, email: $email, password: $password, phone: $phone) {
            _id
            name
            email
            phone
          }
        }
      `,
      variables: user
    });

    state.user = res.data.data.addUser;
  },
  async deleteUser(state, id) {
    const res = await axios.post(
      'http://localhost:8080/graphql', {
      query: `
        mutation deleteUser($id: String!) {
          deleteUser(_id: $id) {
            _id
          }
        }
      `,
      variables: { id }
    });

    state.user = null;
  },
  setUserList(state, userList) {
    state.userList = userList;
  },
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async fetchUserList({ commit }) {
    const res = await axios.post(
      'http://localhost:8080/graphql', {
      query: `
        query{
          users {
            _id
            name
            email
            phone
          }
        }
      `
    });

    commit('setUserList', res.data.data.users);
  },
  async fetchUser({ commit }, id) {
    const res = await axios.post(
      'http://localhost:8080/graphql', {
      query: `
        query fetchUser($id: String!) {
          user (_id: $id) {
            _id
            name
            email
            phone
          }
        }
      `,
      variables: { id }
    });

    commit('setUser', res.data.data.user);
  }
};

export const state = {
  user: null,
  userList: [],
  eventList: [],
};

export default new Vuex.Store({
  mutations,
  actions,
  state,
});
