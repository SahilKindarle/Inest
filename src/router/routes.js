const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PersonalDetailsPage.vue'),
      },
      {
        path: 'section1',
        component: () => import('pages/Section1Page.vue'),
      },
      {
        path: 'section2',
        component: () => import('pages/Section2Page.vue'),
      },
      {
        path: 'section3',
        component: () => import('pages/Section3Page.vue'),
      },
      {
        path: 'section4',
        component: () => import('pages/Section4Page.vue'),
      },
      {
        path: 'section5',
        component: () => import('pages/Section5Page.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
