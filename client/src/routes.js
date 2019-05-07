import UsersList from './components/users/List.vue';

import Events from './components/Events.vue';

const routes = [
  { path: '/', component: Events },
  { path: '/users', component: UsersList },
];

export default routes;
