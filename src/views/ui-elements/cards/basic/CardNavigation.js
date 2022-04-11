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
  // ** States
  const [activePill, setPillActive] = useState('1')

  const togglePills = tab => {
    if (activePill !== tab) {
      setPillActive(tab)
    }
  }

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
                  <CardTitle tag='h4'>Good Afternoon Adam</CardTitle>
                  <CardText>Welcome back to your personalized Dashboard. Check out charts, resources, and useful Ultimate SMS solutions tailored to your account.</CardText>
                </TabPane>
                <TabPane tabId='2'>
                  <CardTitle tag='h4'>Current Plan </CardTitle>
                  <CardText>You are currently subscribed to the Standard plan $49, your subscription will expire in 5 months from now on 11th Oct 22, 12:00 AM.</CardText>
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
