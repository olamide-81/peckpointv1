// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { useState } from 'react'


const ShareContactList = () => {
  const [picker, setPicker] = useState(new Date())
  const [gender, setGender] = useState({
    male : false,
    female : false
  })

  return (
    <Card >
      <CardHeader>
        <CardTitle tag='h4'>Contact Info</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
          <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Username
              </Label>
              <Input type='text' name='name' id='nameMulti' placeholder='User Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                First Name
              </Label>
              <Input type='text' name='name' id='nameMulti' placeholder='First Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Last Name
              </Label>
              <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Address
              </Label>
              <Input type='text' name='city' id='cityMulti' placeholder='Address' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CountryMulti'>
                Country
              </Label>
              <Input type='text' name='country' id='CountryMulti' placeholder='Country' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CompanyMulti'>
                Phone number
              </Label>
              <Input type='number' name='company' id='CompanyMulti' placeholder='Phone number' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
                Email
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='Email' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Input type='checkbox' checked={gender.male} onClick={() => setGender({female : false, male : !gender.male })} id='basic-cb-unchecked' />
              <Label for='basic-cb-unchecked' className='form-check-label'>
                Male
              </Label>
              <Input type='checkbox' checked={gender.female} onClick={() => setGender({ male: false, female: !gender.female })} id='basic-cb-unchecked_fm' />
              <Label for='basic-cb-unchecked_fm' className='form-check-label'>
                Female
              </Label>
            </Col>
          <Col md='6' sm='12' className='mb-1'>
          <Label className='form-label' for='default-picker'>
                Date of Birth
             </Label>
            <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
          </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default ShareContactList
