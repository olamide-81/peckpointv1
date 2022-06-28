// ** Icons Import
import { Home, Send, MessageSquare, CheckSquare, Calendar, FileText, Circle, Book, Tag, Phone, Hash, Users, Shield, CreditCard, DollarSign, UserX, X, User, UserCheck, Settings, MapPin, Globe, ShoppingBag, Upload, Mail, Grid, BarChart, PhoneCall, Image, MessageCircle, Slack, Code, PhoneIncoming, PhoneOutgoing, PieChart, Server, Gift, Sidebar } from 'react-feather'


export default [
  
  {
    id: 'userdashbard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
  id: 'contacts',
  title: 'Contacts',
  icon: <User size={20} />,
  children: [
    {
      id: 'contacts',
      title: 'Contact List',
      icon: <User size={12} />,
      navLink: '/contacts'
    },
    {
      id: 'groups',
      title: 'Groups',
      icon: <Users size={12} />,
      navLink: '/groups'
    }
  ]
},
{
  id: 'birthdays',
  title: 'Birthday',
  icon: <Gift size={20} />,
  children: [
    {
      id: 'cards',
      title: 'Cards',
      icon: <ShoppingBag size={12} />,
      navLink: '/pages/birthday'
    },
    {
      id: 'templates',
      title: 'Templates',
      icon: <Sidebar size={12} />,
      navLink: '/pages/birthday-templates'
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
      id: 'sender-id',
      title: 'Sender ID',
      icon: <Book size={12} />,
      navLink: '/senderid'
      
    },
    {
      id: 'sms-templates',
      title: 'SMS Templates',
      icon: <Tag size={12} />,
      navLink: '/sms-templates'
      
    }
  ]
},
{
  id: 'sms',
  title: 'SMS',
  icon: <MessageSquare size={20} />,
  children: [
    {
      id: 'campaign-builder',
      title: 'Campaign Builder',
      icon: <Server size={12} />,
      navLink: '/sms-campaign-builder'
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />,
      navLink: '/sms-quick-send'
    },
    {
      id: 'send-using-file',
      title: 'Send Using File',
      icon: <FileText size={12} />,
      navLink: '/sms-send-using-file'
    }
  ]
},
{
  id: 'mms',
  title: 'MMS',
  icon: <PhoneCall size={20} />,
  navLink: '/mms'
},
{
  id: 'voice',
  title: 'Voice',
  icon: <Image size={20} />,
  navLink: '/voice'
},
{
  id: 'whatsapp',
  title: 'Whatsapp',
  icon: <MessageCircle size={12} />,
  navLink: '/whatsapp'
},
{/*
  {
  id: 'chat-box',
  title: 'Chat Box',
  icon: <Slack size={20} />,
  navLink: '/chat-box'
},
{
  id: 'developers',
  title: 'Developers',
  icon: <Code size={20} />,
  navLink: '/developers'
}
*/},
 {/* {
    id: 'reports',
    title: 'Reports',
    icon: <BarChart size={20} />,
    children: [
      {
        id: 'all-messages',
        title: 'All Messages',
        icon: <BarChart size={12} />,
        navLink: '/allmessages'
      },
      {
        id: 'recieved-messages',
        title: 'Recieved Messages',
        icon: <PhoneIncoming size={12} />,
        navLink: '/recievedmessages'
      },
      {
        id: 'sent-mesages',
        title: 'Sent Messages',
        icon: <PhoneOutgoing size={12} />,
        navLink: '/sentmessages'
      },
      {
        id: 'campaigns',
        title: 'Campaigns',
        icon: <PieChart size={12} />,
        navLink: '/campaigns'
      }
    ]
  },*/},
  {/*
  {
  id: 'blacklist',
  title: 'Blacklist',
  icon: <Shield size={20} />,
  navLink: '/blacklist'
},
*/}
]
