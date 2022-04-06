// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, InputGroupText } from 'reactstrap'


// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = ({ open, handleModal }) => {
  // ** State
  
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token
  console.log(token)

  async function createcontact() {
    const item = {firstName, lastName, phoneNumber, token}
    console.warn(item)
  
     const result = await fetch("http://api.peckpoint.com/api/v1/contact", {
       method: 'POST',
       body:JSON.stringify(item),
       headers: {
         Authorization: `Bearer ${token}`,
         'Content-Type': 'application/json'
       }
    })
    toast.success("contact created successfully")
    return result.item
  }

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
            <Input id='full-name' placeholder='Bruce Wayne' name='firstname' value={firstName} onChange={(e) => setfirstName(e.target.value) }  />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
            Last Name
          </Label>
          <InputGroup>
            <InputGroupText>
              <Briefcase size={15} />
            </InputGroupText>
            <Input id='post' placeholder='Last name' name='lastname' value={lastName} onChange={(e) => setlastName(e.target.value) }  />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
            Phone Number
          </Label>
          <InputGroup>
            <InputGroupText>
              <Briefcase size={15} />
            </InputGroupText>
            <Input id='post' placeholder='phone number' name='phonenumber' value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value) }  />
          </InputGroup>
        </div>
        <Button className='me-1' color='primary' onClick={createcontact}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
