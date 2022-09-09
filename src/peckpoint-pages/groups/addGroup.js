// ** React Imports
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import APIURL from '../../APIURL'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Mail, Calendar, DollarSign, X, Phone } from 'react-feather'
// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, InputGroupText, UncontrolledButtonDropdown, DropdownMenu,
  DropdownItem,
  DropdownToggle } from 'reactstrap'


// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

function AddGroup({ open, handleModal }) {

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token
  // ** State
  
  const [groupname, Setgroupname] = useState("")
  const [contactname, Setcontactname] = useState("")
  //const [phone_number2, setphoneNumber2] = useState("")
  //const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  useEffect(async() => {
    const resultsender = await fetch(APIURL.API_GROUPS, {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setData(resultsender.data)
     }

  }, [])

  async function addcontacttogroup() {
    const item = {groupname, contactname}
  
     const result = await fetch(APIURL.API_GROUPS, {
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
        <h5 className='modal-title'>Add Contact</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <UncontrolledButtonDropdown>
              <DropdownToggle color='secondary' caret outline>
                <span className='align-middle ms-50 mb-1'>Group Name</span>
              </DropdownToggle>
              <DropdownMenu>
              {
           data.map((data, index) => ([
                <DropdownItem className='w-100' key={index}>
                  <span className='align-middle ms-50'>{data.name}</span>
                  <Input id='post' placeholder='Description' name='description' value={contactname} onChange={(e) => Setcontactname(e.target.value) } />
                </DropdownItem>
                 ])
                 )
              }
              </DropdownMenu>
            </UncontrolledButtonDropdown>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='post'>
           Contact
          </Label>
          <InputGroup>
            <InputGroupText>
              <User size={15} />
            </InputGroupText>
            <Input id='post' placeholder='Description' name='description' value={contactname} onChange={(e) => Setcontactname(e.target.value) }  />
          </InputGroup>
        </div>
        <Button className='me-1' color='primary' onClick={addcontacttogroup}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
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

export default AddGroup