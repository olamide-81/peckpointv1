import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/login',
    component: lazy(() => import('../../peckpoint-pages/authentication/LoginCover')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/admin/login',
    component: lazy(() => import('../../views/pages/authentication/adminlogin')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/login-basic',
    component: lazy(() => import('../../views/pages/authentication/LoginBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/birthday-templates',
    component: lazy(() => import('../../peckpoint-pages/birthday/birthdaycardtemplates')),
    className: 'chat-application'
  },
  {
    path: '/pages/birthday',
    component: lazy(() => import('../../peckpoint-pages/birthday/Birthday')),
    className: 'chat-application'
  },
  {
    path: '/pages/login-cover',
    component: lazy(() => import('../../peckpoint-pages/authentication/LoginCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/register-cover',
    component: lazy(() => import('../../peckpoint-pages/authentication/RegisterCover')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/register-basic',
    component: lazy(() => import('../../views/pages/authentication/RegisterBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/register',
    component: lazy(() => import('../../peckpoint-pages/authentication/RegisterCover')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../peckpoint-pages/authentication/ForgotPasswordCover.js')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/forgot-password-basic',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordBasic')), 
    layout: 'BlankLayout' 
  },
  {
    path: '/pages/forgot-password-cover',
    component: lazy(() => import('../../peckpoint-pages/authentication/ForgotPasswordCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/contact-boarding',
    component: lazy(() => import('../../views/forms/ShareContactList')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/reset-password-basic',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-cover',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/verification/:dataname',
    component: lazy(() => import('../../peckpoint-pages/authentication/VerifyEmailBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/verify-email-basic',
    component: lazy(() => import('../../views/pages/authentication/VerifyEmailCover')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/two-steps-basic',
    component: lazy(() => import('../../views/pages/authentication/TwoStepsBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/two-steps-cover',
    component: lazy(() => import('../../views/pages/authentication/TwoStepsCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/profile',
    component: lazy(() => import('../../views/pages/profile')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/pages/faq',
    component: lazy(() => import('../../views/pages/faq')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/pages/knowledge-base',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBase'))
  },
  {
    path: '/pages/knowledge-base/:category',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategory')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/knowledge-base/:category/:question',
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategoryQuestion')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/account-settings',
    component: lazy(() => import('../../peckpoint-pages/account-settings')),
    layout: 'VerticalLayoutClient'
  },
  {
    path: '/pages/license',
    component: lazy(() => import('../../views/pages/license'))
  },
  {
    path: '/pages/api-key',
    component: lazy(() => import('../../views/pages/api-key'))
  },
  {
    path: '/pages/modal-examples',
    component: lazy(() => import('../../views/pages/modal-examples'))
  },
  {
    path: '/pages/blog/list',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/list'))
  },
  {
    path: '/pages/blog/detail/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/details')),
    meta: {
      navLink: '/pages/blog/detail'
    }
  },
  {
    path: '/pages/blog/detail',
    exact: true,
    component: () => <Redirect to='/pages/blog/detail/1' />
  },
  {
    path: '/pages/blog/edit/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/edit')),
    meta: {
      navLink: '/pages/blog/edit'
    }
  },
  {
    path: '/pages/blog/edit',
    exact: true,
    component: () => <Redirect to='/pages/blog/edit/1' />
  },
  {
    path: '/misc/coming-soon',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/not-authorized',
    component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/maintenance',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  }
]

export default PagesRoutes