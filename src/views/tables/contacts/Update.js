// ** React Imports
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import LoadingSpinner from "../../ui-elements/cards/basic/Spinner"

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Home, Mail, Calendar, DollarSign, X, Phone } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, InputGroupText } from 'reactstrap'


// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UpdateModal = ({ open, handleModall, data }) => {
  // ** State
  console.log(data)
  
  const [firstname, setfirstName] = useState(data.firstname)
  const [lastname, setlastName] = useState(data.lastname)
  const [phone_number, setphoneNumber] = useState(data.phone_number)
  const [dob, setdob] = useState(data.dob)
  const [address, setaddress] = useState('')
  const [email, setEmail] = useState(data.email)
const [cgender, setGender] = useState({
    male : (data.gender === 'male'),
    female: (data.gender === 'female')
  })
  const [isLoading, setIsLoading] = useState(false)
  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token
  useEffect(() => {
      setfirstName(data.firstname)
      setlastName(data.lastname)
      setphoneNumber(data.phone_number)
      setdob(data.dob)
      // setaddress(data.address)
      setEmail(data.email)
      setGender({
          male: (data.gender === 'male'),
          female: (data.gender === 'female')
      })
  }, [data])
    async function updateContact() {
        let gender = 'male'
        for (const g in cgender) {
            if (cgender[g]) {
                gender = g
                break
            }
        }

    const item = {firstname, lastname, phone_number, gender, dob, address, email}
    function refreshPage() {
      window.location.reload(true)
    }
    setIsLoading(true)    
     const result = await fetch(`https://api.peckpoint.com/api/v1/contacts/${data.id}`, {
       method: 'patch',
       body:JSON.stringify(item),
       headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
       }
    })
    .then(res => res.json())
      .then(data => {
        toast.info(data.message)
        setIsLoading(false)
        if (data.success === true) {
          refreshPage()
        }
      })
   return result
    
  }

  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModall} />

  return (
    <Modal
      isOpen={open}
      toggle={handleModall}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={handleModall} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Update Contacts</h5>
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
          <Label className='form-label' for='lname'>
            Last Name
          </Label>
          <InputGroup>
            <InputGroupText>
              <User size={15} />
            </InputGroupText>
            <Input id='lname' placeholder='Last name' name='lastname' value={lastname} onChange={(e) => setlastName(e.target.value) }  />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='phone'>
            Phone Number
          </Label>
          <InputGroup>
            <InputGroupText>
              <Phone size={15} />
            </InputGroupText>
            <Input id='phone' placeholder='phone number' name='phonenumber' value={phone_number} onChange={(e) => setphoneNumber(e.target.value) }  />
          </InputGroup>
        </div>

        <div className='mb-1'>
          <Label className='form-label' for='emailA'>
            Email Address
          </Label>
          <InputGroup>
            <InputGroupText>
              <Mail size={15} />
            </InputGroupText>
            <Input id='emailA' placeholder='Email Address' name='email' value={email} onChange={(e) => setEmail(e.target.value) }  />
          </InputGroup>
        </div>

        <div className='mb-1'>
          <Label className='form-label' for='address'>
            Address
          </Label>
          <InputGroup>
            <InputGroupText>
              <Home size={15} />
            </InputGroupText>
            <Input id='address' placeholder='Address' name='address' value={address} onChange={ (e) => setaddress(e.target.value) }  />
          </InputGroup>
        </div>

        <div className='mb-1'>
          <Label className='form-label' for='dob'>
            DOB
          </Label>
          <InputGroup>
            <InputGroupText>
              <Calendar size={15} />
            </InputGroupText>
            <Input id='dob' type="date" placeholder='Date Of Birth' name='dob' onChange={(e) => setdob(e.target.value) }  />
          </InputGroup>
        </div>
        <div className='mb-1'>
            <Label className='form-label' style={{
                display:'block'
                  }} for='basic-cb-unchecked'>
            Gender
          </Label>
          {/* <InputGroup> */}
           
              <Input type='checkbox' checked={cgender.male} readOnly onClick={() => setGender({female : false, male : !cgender.male })} id='basic-cb-unchecked'/>
              <Label for='basic-cb-unchecked' className='form-check-label'>
                Male
              </Label>
              <Input type='checkbox' checked={cgender.female} readOnly onClick={() => setGender({ male: false, female: !cgender.female })} id='basic-cb-unchecked_fm' />
              <Label for='basic-cb-unchecked_fm' className='form-check-label'>
                Female
              </Label>
              {/* </InputGroup> */}
           </div>

        <Button className='me-1' color='primary' onClick={updateContact} disabled={isLoading}>
          Update
        </Button>
        <Button color='secondary' onClick={handleModall} outline>
          Cancel
        </Button>
      </ModalBody>


    </Modal>
  )
}

export default UpdateModal