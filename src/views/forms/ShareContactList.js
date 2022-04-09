// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { useState } from 'react'
import { toast } from 'react-toastify'


const ShareContactList = () => {
  const [dob, setPicker] = useState(new Date())
  const [gender, setGender] = useState({
    male : false,
    female : false
  })
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumberr] = useState('')
  const [address, setAddress] = useState('')
  const [profile_image, setImage] = useState('')


  async function createcontact() {
    const item = {firstname, lastname, phone_number, email, address, gender, username, dob, profile_image}
  
     const result = await fetch("https://api.peckpoint.com/api/v1/contact-boarding", {
       method: 'POST',
       body:JSON.stringify(item),
       headers: {
        'Content-Type': 'application/json'
       }
    })
    .then(res => res.json())
      .then(data => {
        toast.info(data.message)
      })
    return result
    
  }

  const getGet = (val) => {
  const str = (window.location.search).substring(1)

  const ee = str.split('&')

  for (const e in ee) {
    const c = ee[e].split('=')
    if (c[0] === val) {
      return c[1]
    }
  }
}
// const user_name = getGet('username')
// this would return the value of username in the url 0r any other


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
              <Input type='text' name='username' id='nameMulti' placeholder='User Name' value={username} onChange={(e) => setUsername(e.target.value) } />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                First Name
              </Label>
              <Input type='text' name='firstname' id='nameMulti' placeholder='First Name' value={firstname} onChange={(e) => setFirstname(e.target.value) } />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Last Name
              </Label>
              <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' value={lastname} onChange={(e) => setLastname(e.target.value) }  />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Address
              </Label>
              <Input type='text' name='address' id='cityMulti' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value) } />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='CompanyMulti'>
                Phone number
              </Label>
              <Input type='number' name='company' id='CompanyMulti' placeholder='Phone number' value={phone_number} onChange={(e) => setPhoneNumberr(e.target.value) }  />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
                Email
              </Label>
              <Input type='email' name='Email' id='EmailMulti' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value) }  />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='EmailMulti'>
                Profile Picture
              </Label>
              <Input type='file' name='profileimage' id='profileimage' placeholder='Profile Picture' value={profile_image} onChange={(e) => setImage(e.target.value) }  />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Input type='checkbox' checked={gender.male} onClick={() => setGender({female : false, male : !gender.male })} id='basic-cb-unchecked' value={gender}/>
              <Label for='basic-cb-unchecked' className='form-check-label'>
                Male
              </Label>
              <Input type='checkbox' checked={gender.female} onClick={() => setGender({ male: false, female: !gender.female })} id='basic-cb-unchecked_fm' value={gender} />
              <Label for='basic-cb-unchecked_fm' className='form-check-label'>
                Female
              </Label>
            </Col>
          <Col md='6' sm='12' className='mb-1'>
          <Label className='form-label' for='default-picker'>
                Date of Birth
             </Label>
            <Flatpickr className='form-control' value={dob} onChange={date => setPicker(date)} id='default-picker' />
          </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' onClick={createcontact}>
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