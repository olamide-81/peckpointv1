import { lazy } from 'react'

const ClientDashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/client'))
  },
  {
    path: '/admin/dashboard',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/contacts',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts'))
  },
  {
    path: '/blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/blacklist'))
  },
  {
    path: '/all-contacts-blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/allcontactsblacklist'))
  },
  {
    path: '/groups',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/groups'))
  },
  {
    path: '/allmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/recievedmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
    
  },
  {
    path: '/sentmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/campaigns',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/pages/birthday-templates',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/birthdaytable'))
  },
  {
    path: '/senderid',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/sendingID/index'))
  },
  {
    path: '/numbers',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/keywords',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/sms-templates',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/templatetag'))
  },
  {
    path: '/blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/sms-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/sms-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/sms-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/mms-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/mms-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/mms-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/voice-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/voice-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/voice-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/whatsapp-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/whatsapp-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/whatsapp-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/chat-box',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  },
  {
    path: '/developers',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance'))
  }
]

export default ClientDashboardRoutes
