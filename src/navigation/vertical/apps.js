// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    id: 'users',
    title: 'Customers',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'All Customers',
        icon: <User size={12} />,
        navLink: '/apps/user/list'
      }
    ]
  },
  {
    id: 'email',
    title: 'plans',
    icon: <Mail size={20} />,
    navLink: '/apps/plan'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'todo',
    title: 'Todo',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },

  {
    id: 'roles-permissions',
    title: 'Roles & Permissions',
    icon: <Shield size={20} />,
    children: [
      {
        id: 'roles',
        title: 'Roles',
        icon: <Circle size={12} />,
        navLink: '/apps/roles'
      },
      {
        id: 'permissions',
        title: 'Permissions',
        icon: <Circle size={12} />,
        navLink: '/apps/permissions'
      }
    ]
  },
  {
    id: 'eCommerce',
    title: 'eCommerce',
    icon: <ShoppingCart size={20} />,
    children: [
      {
        id: 'shop',
        title: 'Shop',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/shop'
      },
      {
        id: 'detail',
        title: 'Details',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/product-detail'
      },
      {
        id: 'wishList',
        title: 'Wish List',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/wishlist'
      },
      {
        id: 'checkout',
        title: 'Checkout',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/checkout'
      }
    ]
  }
]
