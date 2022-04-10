// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import { useForm, Controller } from 'react-hook-form'
import 'cleave.js/dist/addons/cleave-phone.us'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

// ** Reactstrap Imports
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'

// ** Demo Components
import DeleteAccount from './DeleteAccount'
import ShareLink from '../../extensions/copy-to-clipboard'
import Birthday from '../../ui-elements/cards/advance/CardCongratulations'


const AccountTabs = ({ data }) => {
  // ** Hooks
  const defaultValues = {
    lastName: '',
    firstName: data.fullName.split(' ')[0]
  }
  const [name, setname] = useState('')
  const [phone, setEmail] = useState('')
  const [email, setPhoneNumberr] = useState('')

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token


  async function updateprofile() {
    const item = {phone, email, name}
  
     const result = await fetch("https://api.peckpoint.com/api/v1/update-profile/", {
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

  const {
    formState: { errors }
  } = useForm({ defaultValues })

   // ** State
   const [userData, setUserData] = useState(null)

    //** ComponentDidMount
    useEffect(() => {
      if (localStorage.getItem('user') !== null) {
        setUserData(JSON.parse(localStorage.getItem('user')))
      }
    }, [])
  
    const user = JSON.parse(localStorage.getItem('user'))

     //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar

  // ** States
 

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setUserData(reader.result)
    }
    reader.readAsDataURL(files[0])
  }


  const handleImgReset = () => {
    setUserData(require('@src/assets/images/avatars/avatar-blank.png').default)
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Profile Details</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <div className='d-flex'>
            <div className='me-25'>
              <img className='rounded me-50' src={userAvatar} alt='Generic placeholder image' height='100' width='100' />
            </div>
            <div className='d-flex align-items-end mt-75 ms-1'>
              <div>
                <Button tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                  Upload
                  <Input type='file' onChange={onChange} hidden accept='image/*' />
                </Button>
                <Button className='mb-75' color='secondary' size='sm' outline onClick={handleImgReset}>
                  Reset
                </Button>
                <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
              </div>
            </div>
          </div>
          <Form className='mt-2 pt-50'>
            <Row>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='firstName'>
                FirstName
                </Label>
                <Input type='text' 
                placeholder='johndoe' 
                name='name'
                value={user.user.name} 
                onChange={(e) => setname(e.target.value) } />
                {errors && errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='lastName'>
                  Username
                </Label>
                <Input type='text' 
                placeholder='johndoe' 
                name='name'
                value={user.user.username} 
               onChange={onChange}/>
                {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='emailInput'>
                  E-mail
                </Label>
                <Input type='email' 
                placeholder='example@gmail.com' 
                name='name'
                value={user.user.email} 
                onChange={(e) => setEmail(e.target.value) }/>
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='phNumber'>
                  Phone Number
                </Label>
                <Input type='text' 
                placeholder='johndoe' 
                name='name'
                value={user.user.phone} 
                onChange={(e) => setPhoneNumberr(e.target.value) } />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='address'>
                  Address
                </Label>
                <Input id='address' name='address' placeholder='12, Business Park' />
              </Col>
              <Col className='mt-2' sm='12'>
                <Button className='me-1' color='primary' onClick={updateprofile}>
                  Save changes
                </Button>
                <Button color='secondary' outline>
                  Discard
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <ShareLink />
      <DeleteAccount />
      <Birthday />
    </Fragment>
  )
}

export default AccountTabs
