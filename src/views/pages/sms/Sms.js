// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row } from 'reactstrap'
import { useState, useEffect } from 'react'
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'
import { toast } from 'react-toastify'
//import makeAnimated from 'react-select/animated'


const saved = JSON.parse(localStorage.getItem('user'))
const token = saved.token

const Sms = () => {

  //const [data, addData] = useState([])
  const [dataa, setDataa] = useState([])
  //const [sender_id, setSenderID] = useState('')
  const [contact, getContact] = useState()
  const [message, setMessage] = useState('')
  const [title, setTitle] = useState('')
  const [sendingserver, SetSendingServer] = useState('')

 { /* useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/sender-ids", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     addData(resultsender.data)
     }

  }, [])*/ }

  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/contacts", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setDataa(resultsender.data)
     }

  }, [])

{ /*  const handleChange = (e) => {
    setSenderID(e.target.value)
  }
  */ }
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
  const item = {contact, sender_id, message, title, sendingserver}
  if (contact !== '' && sender_id !== '' && message !== '' && title !== '' && sendingserver !== '') {
    console.log(item)
    toast.success('message sent successfully')
  } else {
    toast.warning('Please fill all input fields')
  }

}

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Quick Send</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row className='mb-1'>
            <Label sm='3' for='name'>
              Sending Server
            </Label>
            <Col sm='9'>
              <Input type='text' name='sending-server' id='name' placeholder='Sending Server' value={sendingserver} onChange={(e) => SetSendingServer(e.target.value) } />
            </Col>
          </Row>

          <Row className='mb-1'>
          <Label sm='3' >Contacts</Label>
           <Col sm='9'>
            <Select
              onChange={handleChanged}
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              /* eslint-disable */
              getOptionLabel={e => e.firstname + ' ' + e.lastname}
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
              Message Title
            </Label>
            <Col sm='9'>
              <Input type='text' name='text' id='text' placeholder='New Message' value={title} onChange={(e) => setTitle(e.target.value) }/>
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
                Submit
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
export default Sms
