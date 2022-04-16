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
  },
  {
  id: 'contacts',
  title: 'Contacts',
  icon: <User size={20} />,
  navLink: '/contacts'
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
      id: 'sending-servers',
      title: 'Sending Servers',
      icon: <Send size={12} />,
      navLink: '/sending-servers'
   
    },
    {
      id: 'sender-id',
      title: 'Sender ID',
      icon: <Book size={12} />,
      navLink: '/senderid'
      
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
      id: 'sms-templates',
      title: 'SMS Templates',
      icon: <Tag size={12} />,
      navLink: '/sms-templates'
      
    }
  ]
},
{
  id: 'blacklist',
  title: 'Blacklist',
  icon: <Shield size={20} />,
  navLink: '/blacklist'
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
  children: [
    {
      id: 'campaign-builder',
      title: 'Campaign Builder',
      icon: <Server size={12} />,
      navLink: '/mms-campaign-builder'
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />,
      navLink: '/mms-quick-send'
    },
    {
      id: 'send-using-file',
      title: 'Send Using File',
      icon: <FileText size={12} />,
      navLink: '/mms-send-using-file'
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
      icon: <Server size={12} />,
      navLink: '/voice-campaign-builder'
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />,
      navLink: '/voice-quick-send'
    },
    {
      id: 'voice-send-using-file',
      title: 'Send Using File',
      icon: <FileText size={12} />,
      navLink: '/voice-send-using-file'
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
      icon: <Server size={12} />,
      navLink: '/whatsapp-campaign-builder'
    },
    {
      id: 'Quick Send',
      title: 'Quick Send',
      icon: <Send size={12} />,
      navLink: '/whatsapp-quick-send'
    },
    {
      id: 'whatsapp-send-using-file',
      title: 'Send Using File',
      icon: <FileText size={12} />,
      navLink: '/whatsapp-send-using-file'
    }
  ]
},
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
]
