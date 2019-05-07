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
            id
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
  setUserList(state, userList) {
    state.userList = userList;
  },
};

export const actions = {
  async fetchUserList({ commit }) {
    const res = await axios.post(
      'http://localhost:8080/graphql', {
      query: `
        query{
          users {
            id
            name
            email
          }
        }
      `
    });

    commit('setUserList', res.data.data.users);
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
