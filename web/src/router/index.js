import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '@/views/About.vue';
import AdminStuff from '@/views/AdminStuff.vue';
import FAQ from '@/views/Faq.vue';
import Events from '@/views/Events.vue';
import EventDetails from '@/views/EventDetails.vue';
import KitNotes from '@/views/KitNotes.vue';
import KitChecklist from '@/views/KitChecklist.vue';
import Reports from '@/views/Reports.vue';
import ReportDetails from '@/views/ReportDetails.vue';
import AdminReports from '@/views/AdminReports.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      title: 'The Walking Club - Peterborough & Stamford'
    }
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    meta: {
      title: 'About us - The Walking Club'
    }
  },
  {
    name: 'faq',
    path: '/faq',
    component: FAQ,
    meta: {
      title: 'FAQ - The Walking Club'
    }
  },
  {
    name: 'events',
    path: '/events',
    component: Events,
    meta: {
      title: 'Calendar - The Walking Club'
    }
  },
  {
    name: 'eventDetails',
    path: '/event/:id',
    component: EventDetails,
    props: true,
    meta: {
      title: 'Event Details - The Walking Club'
    }
  },
  {
    name: 'reports',
    path: '/reports',
    component: Reports,
    meta: {
      title: 'Reports - The Walking Club'
    }
  },
  {
    name: 'reportDetails',
    path: '/report/:id',
    component: ReportDetails,
    props: true,
    meta: {
      title: 'Report Details - The Walking Club'
    }
  },
  {
    name: 'kitNotes',
    path: '/kitnotes',
    component: KitNotes,
    meta: {
      title: 'Kit Notes - The Walking Club'
    }
  },
  {
    name: 'KitChecklist',
    path: '/checklist',
    component: KitChecklist,
    meta: {
      title: 'Kit Checklist - The Walking Club'
    }
  },
  {
    name: 'AdminStuff',
    path: '/adminstuff',
    component: AdminStuff,
    meta: {
      title: 'Admin Stuff - The Walking Club'
    }
  },
  {
    name: 'adminReports',
    path: '/admin/reports',
    component: AdminReports,
    meta: {
      title: 'Maintain Reports - The Walking Club'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  const newRoute = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  if (newRoute) document.title = newRoute.meta.title;

  next();
});

export default router;
