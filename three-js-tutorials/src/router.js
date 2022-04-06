 import home from '@/components/displayAll.vue';
 import detailPanel from '@/detail/index.vue';
 import error from '@/components/pageNotFound.vue';

 const routes = [
    { path: '/detail', component: home },
    {
        path: '/',
        component: detailPanel,
    },
    { path: '/:pathMatch(.*)*', component: error }
];

 export default routes;