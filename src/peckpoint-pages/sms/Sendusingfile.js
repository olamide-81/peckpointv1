// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row, ListGroup, ListGroupItem} from 'reactstrap'
import { useState, useEffect, Fragment } from 'react'
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'
import { toast } from 'react-toastify'
// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import Idle from '../IdleTimerContainer'
import { FileText, X, DownloadCloud } from 'react-feather'
//import makeAnimated from 'react-select/animated'


const saved = JSON.parse(localStorage.getItem('user'))
const token = saved.token

const Sendusingfile = () => {

  const [data, addData] = useState([])
  const [dataa, setDataa] = useState([])
  const [sender_id, setSenderID] = useState('')
  const [contact, getContact] = useState()
  const [sendingserver, SetSendingServer] = useState('')

  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/sender-ids", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     addData(resultsender.data)
     }

  }, [])

  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/contacts", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setDataa(resultsender.data)
     }

  }, [])

  const handleChange = (e) => {
    setSenderID(e.target.value)
  }
    // handle selection
    const handleChanged = (e) => {
      getContact(Array.isArray(e) ? e.map(x => x.id) : [])
    }

  const colorOptions = dataa

  function refreshPage() {
    window.location.reload(true)
  }

  const reset = () => {
    refreshPage()
  }

// EVERY PROCESS FOR UPLOADING A FILE
 // ** State
 const [files, setFiles] = useState([])

 const { getRootProps, getInputProps } = useDropzone({
   multiple: false,
   accept: 'text/*',
   onDrop: acceptedFiles => {
     setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
   }
 })

 const renderFilePreview = file => {
   if (file.type.startsWith('image')) {
     return <img className='rounded' alt={file.name} src={URL.createObjectURL(file)} height='28' width='28' />
   } else {
     return <FileText size='28' />
   }
 }

 const handleRemoveFile = file => {
   const uploadedFiles = files
   const filtered = uploadedFiles.filter(i => i.name !== file.name)
   setFiles([...filtered])
 }

 const renderFileSize = size => {
   if (Math.round(size / 100) / 10 > 1000) {
     return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
   } else {
     return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
   }
 }

 const fileList = files.map((file, index) => (
   <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
     <div className='file-details d-flex align-items-center'>
       <div className='file-preview me-1'>{renderFilePreview(file)}</div>
       <div>
         <p className='file-name mb-0'>{file.name}</p>
         <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
       </div>
     </div>
     <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
       <X size={14} />
     </Button>
   </ListGroupItem>
 ))

 const handleRemoveAllFiles = () => {
   setFiles([])
 }


 const send = () => {
  const item = {contact, sender_id, sendingserver, files}
  if (contact !== '' && sender_id !== '' && sendingserver !== '' && files.length !== 0 && files.length < 2) {
    console.log(item)
    toast.success('message sent successfully')
  } else {
    toast.warning('Please fill all input fields')
  }

}
  return (
    <Card>
       <Idle></Idle>
      <CardHeader>
        <CardTitle tag='h4'>Send Using File</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row className='mb-1'>
            <Label sm='3' for='name'>
              Sending Server
            </Label>
            <Col sm='9'>
              <Input type='text' name='sending-server' id='name' placeholder='Sending Server' value={sendingserver} onChange={(e) => SetSendingServer(e.target.value) } />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='Email'>
              Sender ID
            </Label>
            <Col sm='9'>
            <Input
                  id="exampleSelect"
                   name="select"
                   type="select"
                   onChange={handleChange}
                   value={sender_id}  
                >
                   {
           data.map((data, index) => ([
                <option key={index} value={data.id}>
                 {data.name}
                </option>
                 ])
                 )
              }
              </Input>
            </Col>
          </Row>

          <Row className='mb-1'>
          <Label sm='3' >Contacts</Label>
           <Col sm='9'>
            <Select
              onChange={handleChanged}
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              /* eslint-disable */
              getOptionLabel={e => e.firstname + ' ' + e.lastname}
              /* eslint-enable */
              getOptionValue={e => e.id}
              name='colors'
              options={colorOptions}
              className='react-select'
              classNamePrefix='select'
            />
          </Col>
           </Row>
          <Row className='mb-1'>
            <Row>
            <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className='d-flex align-items-center justify-content-center flex-column'>
            <DownloadCloud size={64} />
            <h5>Drop Files here or click to upload</h5>
            <p className='text-secondary'>
              Drop files here or click{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                browse
              </a>{' '}
              thorough your machine, You can only upload .text files and you cannot upload more than one file.
            </p>
          </div>
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList}</ListGroup>
            <div className='d-flex justify-content-end'>
              <Button className='me-1' color='danger' outline onClick={handleRemoveAllFiles}>
                Remove All
              </Button>
              <Button color='primary' onClick={ e => e.preventDefault()}>Upload Files</Button>
            </div>
          </Fragment>
        ) : null}
            </Row>

            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button className='me-1' color='primary' onClick={send}>
                Send
              </Button>
              <Button outline color='secondary' onClick={reset}>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default Sendusingfile
