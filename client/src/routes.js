import UserCreate from './components/user/Create.vue';
import UserEdit from './components/user/Edit.vue';
import UserList from './components/user/List.vue';
import UserView from './components/user/View.vue';

import Events from './components/Events.vue';

const routes = [
  { path: '/',                  component: Events,      name: 'home' },
  { path: '/users',             component: UserList,    name: 'user-list' },
  { path: '/user',              component: UserCreate,  name: 'user-create' },
  { path: '/user/:id',          component: UserView,    name: 'user-view' },
  { path: '/user/:id/edit',     component: UserEdit,    name: 'user-edit' },
];

export default routes;
