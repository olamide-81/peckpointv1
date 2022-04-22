// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Nav,
  Card,
  Button,
  NavItem,
  NavLink,
  TabPane,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  TabContent
} from 'reactstrap'

const CardNavigation = () => {
  let timeOfDay
  const date = new Date()
  const hours = date.getHours()
  const styles = {
    fontSize: 35
  }

  if (hours < 12) {
    timeOfDay = 'Morning'
    styles.color = "#D90000"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Afternoon'
    styles.color = "#04733F"
  } else {
    timeOfDay = 'Evening'
    styles.color = "#04756F"
  }

  // ** States
  const [activePill, setPillActive] = useState('1')

  const user = JSON.parse(localStorage.getItem('user'))

  const togglePills = tab => {
    if (activePill !== tab) {
      setPillActive(tab)
    }
  }

  const defaultmessage = (user.user.plan === null) ? 'No Active Plan' : `You are currently subscribed to the ${user.user.plan}`
  return (
    <Fragment>
     
      <Row>
        <Col md='12'>
          <Card className='text-left'>
            <CardHeader>
              <Nav pills>
                <NavItem>
                  <NavLink
                    active={activePill === '1'}
                    onClick={() => {
                      togglePills('1')
                    }}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activePill === '2'}
                    onClick={() => {
                      togglePills('2')
                    }}
                  >
                    Current Plan
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activePill}>
                <TabPane tabId='1'>
                  <CardTitle tag='h4'>Good {timeOfDay} {user.user.name}</CardTitle>
                  <CardText>Welcome back to your personalized Dashboard. Check out charts, resources, and useful PeckPoint SMS solutions tailored to your account.</CardText>
                </TabPane>
                <TabPane tabId='2'>
                  <CardTitle tag='h4'>Current Plan </CardTitle>
                  <CardText>{defaultmessage}</CardText>
                  <Button color='primary' outline>
                    More Info
                  </Button>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardNavigation
