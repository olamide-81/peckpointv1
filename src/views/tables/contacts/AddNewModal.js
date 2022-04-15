// ** React Imports
import { useState } from 'react'
import { toast } from 'react-toastify'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X, Phone } from 'react-feather'

import ShareLink from '../../extensions/copy-to-clipboard'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, InputGroupText } from 'reactstrap'


// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = ({ open, handleModal }) => {
  // ** State
  
  const [firstname, setfirstName] = useState("")
  const [lastname, setlastName] = useState("")
  const [phone_number, setphoneNumber] = useState("")
  //const [phone_number2, setphoneNumber2] = useState("")
  //const [email, setEmail] = useState("")

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token

  async function createcontact() {
    const item = {firstname, lastname, phone_number}
  
     const result = await fetch("https://api.peckpoint.com/api/v1/contacts", {
       method: 'POST',
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

{ /*async function sendviaemail() {
    const emailitem = {email}
  
     const result = await fetch("https://api.peckpoint.com/api/v1/via-email-address", {
       method: 'POST',
       body:JSON.stringify(emailitem),
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
  }*/ }

  { /*async function sendlinkphonenumber() {
    const phone_number = {phone_number2}
  
     const result = await fetch("https://api.peckpoint.com/api/v1/via-phone-number", {
       method: 'POST',
       body:JSON.stringify(phone_number),
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
*/ }

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  return (
    <Modal
      isOpen={open}
      toggle={handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>New Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <Label className='form-label' for='full-name'>
            First Name
          </Label>
          <InputGroup>
            <InputGroupText>
              <User size={15} />
            </InputGroupText>
            <Input id='full-name' placeholder='Bruce Wayne' name='firstname' value={firstname} onChange={(e) => setfirstName(e.target.value) }  />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
            Last Name
          </Label>
          <InputGroup>
            <InputGroupText>
              <User size={15} />
            </InputGroupText>
            <Input id='post' placeholder='Last name' name='lastname' value={lastname} onChange={(e) => setlastName(e.target.value) }  />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
            Phone Number
          </Label>
          <InputGroup>
            <InputGroupText>
              <Phone size={15} />
            </InputGroupText>
            <Input id='post' placeholder='phone number' name='phonenumber' value={phone_number} onChange={(e) => setphoneNumber(e.target.value) }  />
          </InputGroup>
        </div>
        <Button className='me-1' color='primary' onClick={createcontact}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
      </ModalBody>

      <ModalBody className='flex-grow-1'>
           <div className='mb-1'>
           <ShareLink />
           </div>
         </ModalBody>

      {/*   <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
            Phone Number
          </Label>
          <InputGroup>
            <InputGroupText>
              <Phone size={15} />
            </InputGroupText>
            <Input id='post' placeholder='phone number' name='phonenumber' value={phone_number2} onChange={(e) => setphoneNumber2(e.target.value) }  />
          </InputGroup>
        </div>
        <Button className='me-1' color='primary' onClick={sendlinkphonenumber}>
          Send Link 
        </Button>
      </ModalBody>

      <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
            Email
          </Label>
          <InputGroup>
            <InputGroupText>
              <Phone size={15} />
            </InputGroupText>
            <Input id='post' placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value) }  />
          </InputGroup>
        </div>
        <Button className='me-1' color='primary' onClick={sendviaemail}>
          Send Link 
        </Button>
      </ModalBody>*/}

    </Modal>
  )
}

export default AddNewModal
