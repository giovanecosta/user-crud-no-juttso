import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setUserList(state, userList) {
    state.userList = userList;
  },
};

export const actions = {
  async fetchUserList({ commit }) {
    const res = await axios.post(
      'http://localhost:8080/graphql', {
      query: `{
        users {
          id
          name
          email
        }
      }`
    });

    commit('setUserList', res.data.data.users);
  },
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
