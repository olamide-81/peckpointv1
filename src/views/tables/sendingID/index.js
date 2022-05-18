// ** Reactstrap Imports
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'

import { toast } from 'react-toastify'

// ** React Imports
import { useEffect, useState } from 'react'


const CardTitles = () => {

     // ** States

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token
  const [formModal, setFormModal] = useState(false)
  const [name, setName] = useState("")
  const [data, setData] = useState([])

  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/sender-ids", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setData(resultsender.data)
     }

  }, [])

async function deletesender (id) {
  
  const result = await fetch(`https://api.peckpoint.com/api/v1/sender-ids/${id}`, {
    method: 'DELETE',
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

async function approvesender (id) {
  
  const result = await fetch(`https://api.peckpoint.com/api/v1/approve-sender-ids/${id}`, {
    method: 'patch',
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

  async function createsenderid() {
    const item = {name}
  
     const result = await fetch("https://api.peckpoint.com/api/v1/sender-ids", {
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

  return (
    <Row className='match-height'>
      <Col lg='4' md='6'>
      <Button color='primary' className='button' onClick={() => setFormModal(!formModal)}>
                  Create Sender ID
                </Button>
                <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Create Sender ID</ModalHeader>
          <ModalBody>
            <div className='mb-2'>
              <Label className='form-label' for='email'>
                Name:
              </Label>
              <Input type='name' id='name' placeholder='Sender ID name' value={name} onChange={(e) => setName(e.target.value) }  />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={createsenderid}>
              Create
            </Button>{' '}
          </ModalFooter>
        </Modal>
       {
           data.map((data, index) => ([
            <Card key={index}>
              <CardBody>
                <CardTitle tag='h4'>{data.name}</CardTitle>
                <CardText>
                {data.name}
                </CardText>
                <Button color='primary' outline className='sender-id-btn' onClick={() => approvesender(data.id) }>
                  Approve
                </Button>
                <Button color='primary' outline onClick={() => deletesender(data.id) }>
                  Delete
                </Button>
              </CardBody>
            </Card>
           ])
          )
       }
      </Col>
    </Row>
  )
}

export default CardTitles