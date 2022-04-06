 import display from './components/displayAll.vue';
 import detailPanel from './detail/index.vue';
 import error from './components/pageNotFound.vue';

 const routes = [{
         path: `/`,
         name: 'Home',
         component: display,
     },
     {
         path: `/detail`,
         component: detailPanel,
     },
     {
         path: '/:pathMatch(.*)*',
         name: 'Error',
         component: error
     }
 ];



 export default routes;