// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Demo Components
import TableWithButtons from './groups'
import Idle from '../IdleTimerContainer'


// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Tables = () => {
  return (
    <Fragment>
       <Idle></Idle>
      <Breadcrumbs breadCrumbTitle='Group' breadCrumbActive='Group List' />
      <Row>
        <Col sm='12'>
          <TableWithButtons />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
