import { lazy } from 'react'

const ClientDashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/client')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/contacts',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  }
]

export default ClientDashboardRoutes
