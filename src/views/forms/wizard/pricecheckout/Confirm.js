// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom"

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import { toast } from 'react-toastify'

const Confirm = ({ stepper}) => {
  const saved = JSON.parse(localStorage.getItem('user'))
  const useremail = saved.user.email
  const userphone = saved.user.phone
  const name = saved.user.name
  const token = saved.token
  const [dataa, setData] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [address, setAddress] = useState('')

  const { dataname } = useParams()
  console.warn(dataname)
  const id = dataname

  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked')
    } else {
      console.log('⛔️ Checkbox is NOT checked')
    }
    setIsChecked(current => !current)
  }

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
  const plan_id = dataa.id
  const plan_name = dataa.name
  const amount = dataa.cost

  async function checkout() {
    const type = "subscription"
    if (isChecked === true && address !== '') {
      const item = {type, plan_id, amount}  
      console.log(item)
      toast.success(`Dear ${name} Your purchase of ${plan_name} was Succesfull`)
    } else {
      toast.info('Please fill in neccessary fields')
    }
  }

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
              defaultValue={useremail}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label'>
              Address
            </Label>
            <Input type='text' name='address' id='user-address' placeholder='Borough bridge' value={address} onChange={(e) => setAddress(e.target.value) }  />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label'>
              Phone number
            </Label>
            <Input type='number' name='phone number' id='user-phone' placeholder='+2345674532411' defaultValue={userphone} />
          </Col>
          <div className='form-check mb-1'>
             <input
                type="checkbox"
               value={isChecked}
                onChange={handleChange}
                id="subscribe"
                name="subscribe"
              />
              <br/>
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
          <Button color='primary' className='btn-next' onClick={checkout}>
            <span className='align-middle d-sm-inline-block d-none'>Checkout</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Confirm
