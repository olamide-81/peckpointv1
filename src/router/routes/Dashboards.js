import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/',
    component: lazy(() => import('../../views/dashboard/analytics')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/dashboard/plan',
    component: lazy(() => import('../../views/plans/pricing')),
    exact: true
  }
]

export default DashboardRoutes
