// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/admin/plans',
    exact: true,
    className: 'email-application',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/admin/userslist',
    exact: true,
    appLayout: true,
    className: '',
    component: lazy(() => import('../../views/plans/pricing'))
  },
  {
    path: '/admin/currency',
    exact: true,
    className: '',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/all-settings',
    exact: true,
    className: 'email-application',
    component: lazy(() => import('../../views/pages/account-settings'))
},
{
  path: '/admin/blacklist',
  exact: true,
  className: 'email-application',
  component: lazy(() => import('../../views/tables/reactstrap'))
},
{
  path: '/admin/spam-words',
  exact: true,
  className: 'email-application',
  component: lazy(() => import('../../views/tables/reactstrap'))
},
{
  path: '/admin/country',
  exact: true,
  className: 'email-application',
  component: lazy(() => import('../../views/tables/reactstrap/countries'))
},
{
  path: '/admin/language',
  exact: true,
  className: 'email-application',
  component: lazy(() => import('../../views/tables/reactstrap/countries'))
},
{
  path: '/admin/payment-gateways',
  exact: true,
  className: 'email-application',
  component: lazy(() => import('../../views/tables/reactstrap/countries'))
},
{
  path: '/admin/email-templates',
  exact: true,
  className: 'email-application',
  component: lazy(() => import('../../views/tables/reactstrap/countries'))
},
{
  path: '/admin/update',
  exact: true,
  className: 'email-application',
  component: lazy(() => import('../../views/tables/reactstrap/countries'))
},
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
    },

  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/admin/sending-servers',
    className: 'chat-application',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/numbers',
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/sender-id',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/template-tags',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/admin/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  {
    path: '/keywords',
    component: lazy(() => import('../../views/tables/reactstrap'))
  },
  {
    path: '/admin/permissions',
    component: lazy(() => import('../../views/apps/roles-permissions/permissions'))
  },
  {
    path: '/admin/roles',
    component: lazy(() => import('../../views/apps/roles-permissions/roles'))
  }
]

export default AppRoutes
