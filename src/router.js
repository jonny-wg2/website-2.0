import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MobileCoreNetwork from './views/MobileCoreNetwork.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mobile-core-network',
      name: 'mobilecorenetwork',
      component: MobileCoreNetwork
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  mode: 'history'
});
