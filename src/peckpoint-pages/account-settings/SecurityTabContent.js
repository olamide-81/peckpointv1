// ** React Imports
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify'

// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Demo Components
import ApiKeysList from './ApiKeysList'
import CreateApiKey from './CreateApikey'
import TwoFactorAuth from './TwoFactorAuth'
import RecentDevices from './RecentDevices'


const SecurityTabContent = () => {

  const [old_password, setoldPassword] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setpasswordConfirmation] = useState("")

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token


  async function changepassword() {
    const item = {old_password, password, password_confirmation}
  
     const result = await fetch("https://api.peckpoint.com/api/v1/change-password", {
       method: 'PUT',
       body:JSON.stringify(item),
       headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
       }
    })
    .then(res => res.json())
      .then(data => {
        toast.info(data.message)
      })
    return result
    
  }

 
  // ** Hooks

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Change Password</CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
          <Form >
            <Row>
              <Col sm='6' className='mb-1'>
                    <InputPasswordToggle
                      label='Current Password'
                      htmlFor='currentPassword'
                      className='input-group-merge'
                      name='oldpassword' value={old_password} onChange={(e) => setoldPassword(e.target.value)}
                     />
              </Col>
            </Row>
            <Row>
              <Col sm='6' className='mb-1'>
                    <InputPasswordToggle
                      label='New Password'
                      htmlFor='newPassword'
                      className='input-group-merge'
                      name='password' value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                    <InputPasswordToggle
                      label='Retype New Password'
                      htmlFor='retypeNewPassword'
                      className='input-group-merge'
                      name='password_confirmation' value={password_confirmation} onChange={(e) => setpasswordConfirmation(e.target.value)}
                />
              </Col>
              <Col className='mt-1' sm='12'>
                <Button className='me-1' color='primary' onClick={changepassword}>
                  Save changes
                </Button>
                <Button color='secondary' outline>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default SecurityTabContent
