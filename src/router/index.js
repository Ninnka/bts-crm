import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tab/index'
    },
    {
      path: '/tab',
      name: 'Tab',
      component: (resolve) => {
        require(['@pages/Tab'], resolve);
      },
      children: [
        {
          path: 'index',
          name: 'index',
          component: (resolve) => {
            require(['@pages/index'], resolve);
          }
        },
        {
          path: 'account-center',
          name: 'account-center',
          component: (resolve) => {
            require(['@pages/account-center'], resolve);
          }
        },
        {
          path: 'analysis-transaction',
          name: 'analysis-transaction ',
          component: (resolve) => {
            require(['@pages/analysis-transaction'], resolve);
          }
        },
        {
          path: 'report',
          name: 'report',
          component: (resolve) => {
            require(['@pages/report'], resolve);
          }
        }
      ]
    }
  ]
});
