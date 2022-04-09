// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Demo Components
import TableWithButtons from './templatetags'


// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='SMS Template' breadCrumbActive='Templates' />
      <Row>
        <Col sm='12'>
          <TableWithButtons />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
