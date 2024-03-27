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
        component: () => import('pages/SectionOnePage.vue'),
      },
      {
        path: 'section2',
        component: () => import('pages/SectionTwoPage.vue'),
      },

      {
        path: 'section3',
        component: () => import('pages/SectionThreePage.vue'),
      },

      {
        path: 'section4',
        component: () => import('pages/SectionFourPage.vue'),
      },

      {
        path: 'section5',
        component: () => import('pages/SectionFivePage.vue'),
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
