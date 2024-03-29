// ** React Imports
import { useContext, useEffect, useState } from 'react'

// ** Icons Imports
import { List, Eye } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Demo Components
import InvoiceList from '@src/views/apps/invoice/list'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import Cardtab from '@src/views/ui-elements/cards/basic/CardNavigation'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import Contacts from '@src/views/ui-elements/cards/statistics/contacts'
import Contactgroups from '@src/views/ui-elements/cards/statistics/contactgroups'
import Blacklist from '@src/views/ui-elements/cards/statistics/blacklist'
import SMStemplates from '@src/views/ui-elements/cards/statistics/smstemplates'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

/*
// ** Images
import jsonImg from '@src/assets/images/icons/json.png'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'*/

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import axios from 'axios'
import { toast } from 'react-toastify'

import Idle from '../../IdleTimerContainer'

const AnalyticsDashboard = () => { 
  // ** Context
  const { colors } = useContext(ThemeColors)
  const [contactsno, setContacts] = useState('')
  const [groupno, setGroup] = useState('')

  const user = JSON.parse(localStorage.getItem('user'))
  const token = user.token

  useEffect(() => {
    try {
      const contactnofetch = async () => {
        try {
          const response = await axios.get('https://api.peckpoint.com/api/v1/contacts', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          })
          setContacts((response.data.data).length)
        } catch (err) {
          if (err.message === 'Request failed with status code 400') {
            toast.info('No Contact or group created yet')
          } else {
            toast.warn(err.message)
          }
          
        }
      }
      contactnofetch()
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(() => {
  try {
    const groupnofetch = async () => {
      try {
        const response = await axios.get('https://api.peckpoint.com/api/v1/groups', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        setGroup((response.data.data).length)
      } catch (err) {
        if (err.message === 'Request failed with status code 400') {
         
        } else {
          toast.warn(err.message)
        }
      }
    }
    groupnofetch()
  } catch (error) {
    console.log(error)
  }
})
  // ** Vars 
  /*
  const avatarGroupArr = [
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Billy Hopkins',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Amy Carson',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Brandon Miles',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Daisy Weber',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Jenny Looper',
      placement: 'bottom',
      img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default
    }
  ]
  */
  /* 
  const data = [
    {
      title: '12 Invoices have been paid',
      content: 'Invoices have been paid to the company.',
      meta: '',
      metaClassName: 'me-1',
      customContent: (
        <div className='d-flex align-items-center'>
          <img className='me-1' src={jsonImg} alt='data.json' height='23' />
          <span>data.json</span>
        </div>
      )
    },
    {
      title: 'Client Meeting',
      content: 'Project meeting with john @10:15am.',
      meta: '',
      metaClassName: 'me-1',
      color: 'warning',
      customContent: (
        <div className='d-flex align-items-center'>
          <Avatar img={ceo} />
          <div className='ms-50'>
            <h6 className='mb-0'>John Doe (Client)</h6>
            <span>CEO of Infibeam</span>
          </div>
        </div>
      )
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'info',
      meta: '',
      metaClassName: 'me-1',
      customContent: <AvatarGroup data={avatarGroupArr} />
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'danger',
      meta: '',
      metaClassName: 'me-1'
    }
  ]*/
    
   
  return (
    <div id='dashboard-analytics'>
      <Idle></Idle>
      <Row className='match-height'>
       {/* <Col lg='6' sm='12'>
          <CardCongratulations />
        </Col> */}
         <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Eye size={21} />} color='info' stats={groupno} statTitle='Contact Groups' />
        </Col>
      
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Eye size={21} />} color='info' stats={contactsno} statTitle='Contacts' />
        </Col>
      

        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Eye size={21} />} color='info' stats='0' statTitle='Blacklist' />
        </Col>
      
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Eye size={21} />} color='info' stats='0' statTitle='Sms Templates' />
        </Col>
      
      </Row>
      <Row className='match-height'>
        <Col lg='6' xs='12'>
          <Cardtab primary={colors.primary.main} />
        </Col>
        <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row>
      {/*
      <Row className='match-height'>
        <Col lg='4' xs='12'>
          <Card className='card-user-timeline'>
            <CardHeader>
              <div className='d-flex align-items-center'>
                <List className='user-timeline-title-icon' />
                <CardTitle tag='h4'>User Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardBody>
              <Timeline className='ms-50 mb-0' data={data} />
            </CardBody>
          </Card>
        </Col>
        <Col lg='4' md='6' xs='12'>
          <Sales primary={colors.primary.main} info={colors.info.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardAppDesign />
        </Col>
      </Row> 
      */}
       {/*  <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row>*/}
    </div>
  )
}

export default AnalyticsDashboard
