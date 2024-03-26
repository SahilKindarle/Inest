import pages from './pages'

const children = pages.map(page => ({
  path: page.path,
  component: () => import('pages/' + page.file + '.vue')
}))

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PersonalDetailsPage.vue') }
    ].concat(children)
  },

  {
    path: '/section1',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SectionOnePage.vue') }
    ].concat(children)
  },

  {
    path: '/section2',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SectionTwoPage.vue') }
    ].concat(children)
  },

  {
    path: '/section3',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SectionThreePage.vue') }
    ].concat(children)
  },

  {
    path: '/section4',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SectionFourPage.vue') }
    ].concat(children)
  },
  {
    path: '/section5',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SectionFivePage.vue') }
    ].concat(children)
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
