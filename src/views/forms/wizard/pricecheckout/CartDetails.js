// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom"
// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const CartDetails = ({ stepper}) => {
  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token
  const [dataa, setData] = useState('')
  
  const { dataname } = useParams()
  console.warn(dataname)
  const id = dataname
  
  useEffect(async() => {
      const resultsender = await fetch(`https://api.peckpoint.com/api/v1/plans/${id}`, {
          headers: {
           Authorization: `Bearer ${token}`
          }
       }).then(res => res.json())
  
      if (resultsender.success) {
       setData(resultsender.data)
       }
  
    }, [])
  
    console.warn(dataa)
  
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>The {dataa.name}</h5>
        <small className='text-muted'>{dataa.description}</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
        <Col className='mb-1' xl='4' md='6' sm='12'>
            <Label className='form-label' for='disabledInput'>
              Duration
            </Label>
            <Input type='text' id='disabledInput' disabled  placeholder={dataa.duration}/>
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='disabledInput'>
              Price ($)
            </Label>
            <Input type='text' id='disabledInput' disabled  placeholder={dataa.cost}/>
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
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

export default CartDetails
