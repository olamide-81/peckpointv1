// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row } from 'reactstrap'
import { useState} from 'react'
import List from './index'
// ** Utils

import { toast } from 'react-toastify'
//import makeAnimated from 'react-select/animated'


const saved = JSON.parse(localStorage.getItem('user'))
const token = saved.token

const Sms = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState()
  const [cost, SetCost] = useState('')

  function refreshPage() {
    window.location.reload(true)
  }

  const reset = () => {
    refreshPage()
  }

const send = () => {
  const item = {name, description, duration, cost, token}
  if (name !== '' && description !== '' && duration !== '' && cost !== '') {
    console.log(item)
    toast.success('plan created successfully')
  } else {
    toast.warning('Please fill all input fields')
  }

}

  return (
      <div>
           <Card>
      <CardHeader>
        <CardTitle tag='h4'>Create New Plan</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row className='mb-1'>
            <Label sm='3' for='name'>
              Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='sending-server' id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value) } />
            </Col>
          </Row>

          <Row className='mb-1'>
          <Label sm='3' >Description</Label>
          <Col sm='9'>
              <Input type='text' name='text' id='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value) }/>
            </Col>
           </Row>

          <Row className='mb-1'>
            <Label sm='3'>
              Duration
            </Label>
            <Col sm='9'>
              <Input type='text' name='text' id='text' placeholder='Duration' value={duration} onChange={(e) => setDuration(e.target.value) }/>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3'>
              Cost
            </Label>
            <Col sm='9'>
              <Input name='text' id='text' placeholder='Cost' value={cost} onChange={(e) => SetCost(e.target.value) }/>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button className='me-1' color='primary' onClick={send}>
                Create
              </Button>
              <Button outline color='secondary' onClick={reset}>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
    <List/>
      </div>
  )
}
export default Sms
