// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const Confirm = ({ stepper}) => {
  const saved = JSON.parse(localStorage.getItem('user'))
  const useremail = saved.user.email

  console.log(useremail)

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Personal Details</h5>
        <small>Please Enter Your Details.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label'>
              Email
            </Label>
            <Input
              type='email'
              id='user-email'
              name='useremail'
              placeholder='johndoe@gmail.com'
              value={useremail}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label'>
              Address
            </Label>
            <Input type='text' name='address' id='user-address' placeholder='Borough bridge' />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label'>
              Phone number
            </Label>
            <Input type='number' name='phone number' id='user-phone' placeholder='+23456443213' />
          </Col>
          <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  I Confirm to the terms and conditions
                </Label>
              </div>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Confirm
