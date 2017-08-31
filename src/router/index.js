import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signup',
      name: 'signUp',
      component: (resolve) => {
        require(['@pages/sign-up'], resolve);
      }
    },
    {
      path: '/signin',
      name: 'signIn',
      component: (resolve) => {
        require(['@pages/sign-in'], resolve);
      }
    },
    {
      path: '/resetpw',
      name: 'resetPw',
      component: (resolve) => {
        require(['@pages/reset-pw'], resolve);
      }
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
          path: 'capital-flow',
          name: 'capital-flow',
          component: (resolve) => {
            require(['@pages/capital-flow'], resolve);
          }
        },
        {
          path: 'money-records',
          name: 'money-records',
          component: (resolve) => {
            require(['@pages/money-records'], resolve);
          }
        },
        {
          path: 'test',
          name: 'test',
          component: (resolve) => {
            require(['@pages/test'], resolve);
          }
        },
        {
          path: 'fund-management',
          name: 'fund-management',
          component: (resolve) => {
            require(['@pages/fund-management'], resolve);
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
