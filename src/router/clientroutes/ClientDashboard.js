import { lazy } from 'react'

const ClientDashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/client'))
  },
  {
    path: '/contacts',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/allmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/recievedmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/sentmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/campaigns',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/sending-servers',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/sendingid',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/numbers',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/keywords',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/template-tags',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  }
]

export default ClientDashboardRoutes
