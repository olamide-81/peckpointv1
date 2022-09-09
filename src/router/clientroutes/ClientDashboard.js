import { lazy } from 'react'

const ClientDashboardRoutes = [
  // Dashboards
  {
    path: '/admin/dashboard',
    component: lazy(() => import('../../peckpoint-pages/dashboard/admin')),
    layout: 'VerticalLayoutAdmin'
  },
  {
    path: '/dashboard',
    component: lazy(() => import('../../peckpoint-pages/dashboard/client')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/contacts',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/contacts/')),
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
    layout: 'VerticalLayoutAdmin'
  },
  {
    path: '/all-contacts-blacklist',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/allcontactsblacklist')),
    layout: 'VerticalLayoutAdmin'
  },
  {
    path: '/groups',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/groups')),
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
    path: '/pages/pricing',
    component: lazy(() => import('../../peckpoint-pages/pricing')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/pages/birthday-templates',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/birthday/birthdaycardtemplates')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/pages/birthday',
    component: lazy(() => import('../../peckpoint-pages/birthday/Birthday')),
    className: 'chat-application',
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/templatetwo',
    component: lazy(() => import('../../peckpoint-pages/birthday/Birthdaytwo')),
    className: 'chat-application',
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/admin/plans',
    component: lazy(() => import('../../peckpoint-pages/pricing/Create')),
    className: 'chat-application',
    layout: 'VerticalLayoutAdmin'
  },
  {
    path: '/senderid',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/sendingID')),
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
    path: '/sms-campaign-builder',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/sms/Campaignbuilder')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/sms-quick-send',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/sms/Sms')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/sms-send-using-file',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/sms/Sendusingfile')),
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
    path: '/success',
    className: 'chat-application',
    component: lazy(() => import('../../peckpoint-pages/Successpayment')),
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