// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row } from 'reactstrap'
import { useState, useEffect } from 'react'
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'
import { toast } from 'react-toastify'
import Idle from '../IdleTimerContainer'
//import makeAnimated from 'react-select/animated'


const saved = JSON.parse(localStorage.getItem('user'))
const token = saved.token

const Campaignbuilder = () => {

  const [data, addData] = useState([])
  const [dataa, setDataa] = useState([])
  const [sender_id, setSenderID] = useState('')
  const [contact, getContact] = useState()
  const [message, setMessage] = useState('')
  const [sendingserver, SetSendingServer] = useState('')

  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/sender-ids", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     addData(resultsender.data)
     }

  }, [])

  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/groups", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setDataa(resultsender.data)
     }

  }, [])

  const handleChange = (e) => {
    setSenderID(e.target.value)
  }
    // handle selection
    const handleChanged = (e) => {
      getContact(Array.isArray(e) ? e.map(x => x.id) : [])
    }

  const colorOptions = dataa

  function refreshPage() {
    window.location.reload(true)
  }

  const reset = () => {
    refreshPage()
  }

const send = () => {
  const item = {contact, sender_id, message, sendingserver}
  if (contact !== '' && sender_id !== '' && message !== '' && sendingserver !== '') {
    console.log(item)
    toast.success('message sent successfully')
  } else {
    toast.warning('Please fill all input fields')
  }

}

  return (
    <Card>
       <Idle></Idle>
      <CardHeader>
        <CardTitle tag='h4'>Campaign Builder</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
        <Row className='mb-1'>
            <Label sm='3'>
              Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='text' id='text' placeholder='Name'/>
            </Col>
          </Row>
          <Row className='mb-1'>
            <Label sm='3' for='name'>
              Sending Server
            </Label>
            <Col sm='9'>
              <Input type='text' name='sending-server' id='name' placeholder='Sending Server' value={sendingserver} onChange={(e) => SetSendingServer(e.target.value) } />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='Email'>
              Sender ID
            </Label>
            <Col sm='9'>
            <Input
                  id="exampleSelect"
                   name="select"
                   type="select"
                   onChange={handleChange}
                   value={sender_id}  
                >
                   {
           data.map((data, index) => ([
                <option key={index} value={data.id}>
                 {data.name}
                </option>
                 ])
                 )
              }
              </Input>
            </Col>
          </Row>

          <Row className='mb-1'>
          <Label sm='3' >Contacts Groups</Label>
           <Col sm='9'>
            <Select
              onChange={handleChanged}
              isClearable={false}
              theme={selectThemeColors}
              /* eslint-disable */
              getOptionLabel={e => e.name}
              /* eslint-enable */
              getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
           </Row>

           <Row className='mb-1'>
          <Label sm='3' >Country Code</Label>
           <Col sm='9'>
            <Select
              onChange={handleChanged}
              isClearable={false}
              theme={selectThemeColors}
              /* eslint-disable */
              getOptionLabel={e => e.name}
              /* eslint-enable */
              getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
           </Row>

           <Row className='mb-1'>
          <Label sm='3' >SMS Templates</Label>
           <Col sm='9'>
            <Select
              onChange={handleChanged}
              isClearable={false}
              theme={selectThemeColors}
              /* eslint-disable */
              getOptionLabel={e => e.name}
              /* eslint-enable */
              getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
           </Row>
           <Row className='mb-1'>
          <Label sm='3' >Available Tag</Label>
           <Col sm='9'>
            <Select
              onChange={handleChanged}
              isClearable={false}
              theme={selectThemeColors}
              /* eslint-disable */
              getOptionLabel={e => e.name}
              /* eslint-enable */
              getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
           </Row>
          <Row className='mb-1'>
            <Label sm='3'>
              Message
            </Label>
            <Col sm='9'>
              <Input name='text' id='text' type="textarea" className='message-content' value={message} onChange={(e) => setMessage(e.target.value) }/>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button className='me-1' color='primary' onClick={send}>
                Send
              </Button>
              <Button outline color='secondary' onClick={reset}>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default Campaignbuilder
