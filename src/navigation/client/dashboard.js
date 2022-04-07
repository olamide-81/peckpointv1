// ** Icons Import
import { Home, Send, MessageSquare, CheckSquare, Calendar, FileText, Circle, Book, Tag, Phone, Hash, Users, Shield, CreditCard, DollarSign, UserX, X, User, UserCheck, Settings, MapPin, Globe, ShoppingBag, Upload, Mail, Grid, BarChart, PhoneCall, Image, MessageCircle, Slack, Code, PhoneIncoming, PhoneOutgoing, PieChart, Server } from 'react-feather'


export default [
  
  {
    id: 'userdashbard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'reports',
    title: 'Reports',
    icon: <BarChart size={20} />,
    children: [
      {
        id: 'all-messages',
        title: 'All Messages',
        icon: <BarChart size={12} />
      },
      {
        id: 'recieved-messages',
        title: 'Recieved Messages',
        icon: <PhoneIncoming size={12} />
      },
      {
        id: 'sent-mesages',
        title: 'Sent Messages',
        icon: <PhoneOutgoing size={12} />
      },
      {
        id: 'campaigns',
        title: 'Campaigns',
        icon: <PieChart size={12} />
      }
    ]
  },
  {
  id: 'contacts',
  title: 'Contacts',
  icon: <User size={20} />,
  navLink: '/contacts'
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
      icon: <Send size={12} />
   
    },
    {
      id: 'sender-id',
      title: 'Sender ID',
      icon: <Book size={12} />
      
    },
    {
      id: 'numbers',
      title: 'Numbers',
      icon: <Phone size={12} />
      
    },
    {
      id: 'keywords',
      title: 'Keywords',
      icon: <Hash size={12} />
     
    },
    {
      id: 'template-tags',
      title: 'Template Tags',
      icon: <Tag size={12} />
      
    }
  ]
},
{
  id: 'blacklist',
  title: 'Blacklist',
  icon: <Shield size={20} />
},
{
  id: 'sms',
  title: 'SMS',
  icon: <MessageSquare size={20} />,
  children: [
    {
      id: 'plans-table',
      title: 'Campaign Builder',
      icon: <Server size={12} />
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />
    },
    {
      id: 'plans-currency',
      title: 'Send Using File',
      icon: <FileText size={12} />
    }
  ]
},
{
  id: 'mms',
  title: 'MMS',
  icon: <PhoneCall size={20} />,
  children: [
    {
      id: 'plans-table',
      title: 'Campaign Builder',
      icon: <Server size={12} />
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />
    },
    {
      id: 'plans-currency',
      title: 'Send Using File',
      icon: <FileText size={12} />
    }
  ]
},
{
  id: 'voice',
  title: 'Voice',
  icon: <Image size={20} />,
  children: [
    {
      id: 'plans-table',
      title: 'Campaign Builder',
      icon: <Server size={12} />
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />
    },
    {
      id: 'plans-currency',
      title: 'Send Using File',
      icon: <FileText size={12} />
    }
  ]
},
{
  id: 'whatsapp',
  title: 'Whatsapp',
  icon: <MessageCircle size={20} />,
  children: [
    {
      id: 'plans-table',
      title: 'Campaign Builder',
      icon: <Server size={12} />
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />
    },
    {
      id: 'plans-currency',
      title: 'Send Using File',
      icon: <FileText size={12} />
    }
  ]
},
{
  id: 'chat-box',
  title: 'Chat Box',
  icon: <Slack size={20} />
},
{
  id: 'developers',
  title: 'Developers',
  icon: <Code size={20} />
}
]
