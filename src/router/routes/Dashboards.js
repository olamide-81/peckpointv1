import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards

  {
    path: '/dashboard/plan',
    component: lazy(() => import('../../views/plans/pricing')),
    exact: true
  }
]

export default DashboardRoutes
