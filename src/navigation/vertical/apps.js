// ** Icons Import
import { Send, MessageSquare, CheckSquare, Calendar, FileText, Circle, Book, Tag, Phone, Hash, Users, Shield, CreditCard, DollarSign, UserX, X, User, UserCheck, Settings, MapPin, Globe, ShoppingBag, Upload, Mail, Grid, BarChart } from 'react-feather'

export default [
  {
    id: 'users',
    title: 'Customers',
    icon: <Users size={20} />,
    children: [
      {
        id: 'list',
        title: 'All Customers',
        icon: <Users size={12} />,
        navLink: '/admin/userslist'
      }
    ]
  },
  {
    id: 'plans',
    title: 'Plan',
    icon: <CreditCard size={20} />,
    children: [
      {
        id: 'plans-table',
        title: 'Plan',
        icon: <CreditCard size={12} />,
        navLink: '/admin/plans'
      },
      {
        id: 'plans-currency',
        title: 'Currencies',
        icon: <DollarSign size={12} />,
        navLink: '/admin/currency'
      }
    ]
  },
  {
    id: 'sending',
    title: 'Sending',
    permissions: ['client'],
    icon: <Send size={20} />,
    children: [
      {
        id: 'sending-servers',
        title: 'Sending Servers',
        icon: <Send size={12} />,
        navLink: '/admin/sending-servers'
      },
      {
        id: 'sender-id',
        title: 'Sender ID',
        icon: <Book size={12} />,
        navLink: '/sender-id'
      },
      {
        id: 'numbers',
        title: 'Numbers',
        icon: <Phone size={12} />,
        navLink: '/numbers'
      },
      {
        id: 'keywords',
        title: 'Keywords',
        icon: <Hash size={12} />,
        navLink: '/keywords'
      },
      {
        id: 'template-tags',
        title: 'Template Tags',
        icon: <Tag size={12} />,
        navLink: '/template-tags'
      }
    ]
  },
  {
    id: 'scurity',
    title: 'Security',
    icon: <Shield size={20} />,
    navLink: '/apps/todo',
    children: [
      {
        id: 'blacklist',
        title: 'Blacklist',
        icon: <UserX size={12} />,
        navLink: '/admin/blacklist'
      },
      {
        id: 'spam-words',
        title: 'Spam Words',
        icon: <X size={12} />,
        navLink: '/admin/spam-words'
      }
    ]
  },
  {
    id: 'roles-permissions',
    title: 'Administrator',
    icon: <User size={20} />,
    children: [
      {
        id: 'roles',
        title: 'Administrators ',
        icon: <Users size={12} />,
        navLink: '/admin/roles'
      },
      {
        id: 'permissions',
        title: 'Admin Roles',
        icon: <UserCheck size={12} />,
        navLink: '/admin/permissions'
      }
    ]
  },
  {
    id: 'settings',
    title: 'Settings',
    permissions: ['client'],
    icon: <Settings size={20} />,
    children: [
      {
        id: 'all-settings',
        title: 'All Settings',
        icon: <Settings size={12} />,
        navLink: '/all-settings'
      },
      {
        id: 'settings-country',
        title: 'Countries',
        icon: <MapPin size={12} />,
        navLink: '/admin/country'
      },
      {
        id: 'language',
        title: 'Language',
        icon: <Globe size={12} />,
        navLink: '/admin/language'
      },
      {
        id: 'payment-gateway',
        title: 'Payment Gateways',
        icon: <ShoppingBag size={12} />,
        navLink: '/admin/payment-gateways'
      },
      {
        id: 'emai;-templates',
        title: 'Email Templates',
        icon: <Mail size={12} />,
        navLink: '/admin/email-templates'
      },
      {
        id: 'update-application',
        title: 'Update Application',
        icon: <Upload size={12} />,
        navLink: '/admin/update'
      }
    ]
  },
  /*
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },*/
  {
    id: 'invoice',
    title: 'Reports',
    icon: <BarChart size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/admin/invoice/list'
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
      },
      {
        id: 'sms-history',
        title: 'SMS History',
        icon: <Circle size={12} />,
        navLink: '/admin/sms'
      }
    ]
  },

  {
    id: 'theme',
    title: 'Theme Customizer',
    icon: <Grid size={20} />,
    navLink: '/'
  }

  
  /* {
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
  }  */
]
