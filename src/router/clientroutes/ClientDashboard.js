import { lazy } from 'react'

const ClientDashboardRoutes = [
  // Dashboards
  {
    path: '/admin/dashboard',
    component: lazy(() => import('../../views/dashboard/analytics')),
    layout: 'VerticalLayoutAdmin'
  },
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/client')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/contacts',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/contacts')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: "/checkoutwizard/:dataname",
    className: 'chat-application',
    component: lazy(() => import('../../views/forms/wizard/Checkout')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/blacklist')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/all-contacts-blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/allcontactsblacklist')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/groups',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/groups')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/allmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/recievedmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
    
  },
  {
    path: '/sentmessages',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/campaigns',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/pages/birthday-template',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/birthdaytable')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/pages/birthday',
    component: lazy(() => import('../../views/ui-elements/cards/basic/CardImages')),
    className: 'chat-application'
  },
  {
    path: '/senderid',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/sendingID/index')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/numbers',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutAdmin'
  },
  {
    path: '/keywords',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutAdmin'
  },
  {
    path: '/sms-templates',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/templatetag')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/sms-templates-new',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/sms-template/Smstemplate')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/sms-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/sms/Campaignbuilder')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/sms-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/sms/Sms')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/sms-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/sms/Sendusingfile')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/mms-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/mms',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/voice',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/whatsapp',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/directory',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/Directory/index')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/mms-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/mms-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/voice-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/voice-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/voice-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/whatsapp-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/whatsapp-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/whatsapp-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/chat-box',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/developers',
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'VerticalLayoutClient'
  }
]

export default ClientDashboardRoutes