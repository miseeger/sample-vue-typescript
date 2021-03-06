import Vue from 'vue';
import Router, { Route } from 'vue-router';
import { routes } from './app';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * Configure pre request checks and router validations.
 * Access control.
 */
router.beforeEach((to: Route, from: Route, next: any) => {
  if (to.meta.changeRoot) {
    store.dispatch('rootState/setDefaultState', to.meta.menus);
  }
  next();
});

router.beforeResolve((to: Route, from: Route, next: any) => {
  next();
});

router.afterEach((to: Route, from: Route) => {
  // Here do something after everything is ready.
});

export default router;
