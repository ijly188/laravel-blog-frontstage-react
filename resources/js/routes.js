import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
// import Indexwrap from './components/frontstage/Indexwrap.vue';
import Indexwrap from './vue/layouts/Indexwrap'

Vue.use(Router);

const routersetting = {
  mode: 'history',
  routes: [
    {
      path: '/', // 路徑
      component: App,
      children: [
        {
          path: '', //路徑
          component: Indexwrap,
          children: [],
        }
      ],
    }
  ],
}

export default new Router(routersetting);
