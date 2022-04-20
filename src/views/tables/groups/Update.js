// ** React Imports
import { useState, useEffect } from 'react'
// import { toast } from 'react-toastify'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, Briefcase, Home, Mail, Calendar, DollarSign, X, Phone } from 'react-feather'

// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, InputGroupText } from 'reactstrap'


// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const UpdateModal = ({ open, handleModal, data }) => {
  // ** State

  const [name, setName] = useState(data.name)
  const [description, setDescription] = useState(data.description)

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token
  useEffect(() => {
      setName(data.name)
      setDescription(data.description)
  }, [data])
    async function updateGroup() {
    const item = {name, description}
        
     const result = await fetch(`https://api.peckpoint.com/api/v1/groups/${data.id}`, {
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
      })
   return result
    
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
        <h5 className='modal-title'>Update Group</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <div className='mb-1'>
          <Label className='form-label' for='full-name'>
            Group name
          </Label>
          <InputGroup>
            <InputGroupText>
              <User size={15} />
            </InputGroupText>
            <Input id='full-name' placeholder='New Group' name='name' value={name} onChange={(e) => setName(e.target.value) }  />
          </InputGroup>
        </div>
        <div className='mb-1'>
          <Label className='form-label' for='lname'>
            Description
          </Label>
          <InputGroup>
            <InputGroupText>
              <User size={15} />
            </InputGroupText>
            <Input id='lname' placeholder='this is my first group' name='description' value={description} onChange={(e) => setDescription(e.target.value) }  />
          </InputGroup>
        </div>
        <Button className='me-1' color='primary' onClick={updateGroup}>
          Submit
        </Button>
        <Button color='secondary' onClick={handleModal} outline>
          Cancel
        </Button>
      </ModalBody>


    </Modal>
  )
}

export default UpdateModal