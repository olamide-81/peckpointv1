// ** React Imports
import { Fragment, useEffect, useState, forwardRef } from 'react'

// ** Table Data & Columns
// import { dmodal, openUodal, openAmodal, Admodal } from './data'

//import { delayLog } from './delayLog'
// ** Add New Modal Component
import AddNewModal from './AddNewModal'

import UpdateModal from './Update'
import AddContact from './addContact'

import DataTable from 'react-data-table-component'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus, MoreVertical, Edit, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
  Table,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  FormGroup
} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'

const saved = JSON.parse(localStorage.getItem('user'))
const token = saved.token


// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className='form-check'>
    <Input type='checkbox' ref={ref} {...props} />
  
  </div>
))

const Contact = () => {
  // ** States
  const [data, addData] = useState([])
  const [group_id, setGroupname] = useState('')
  const [contact_id, setContacts] = useState('')
  const [contactfetch, setContactfetch] = useState([])
  //const [response, setResponse] = useState({})
  // const [mdata, addMdata] = useState({}) 

  //Handle Input Change Event


  //Handle Selection

  useEffect(async() => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/groups", {
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
     setContactfetch(resultsender.data)
     }

  }, [])

  function refreshPage() {
    window.location.reload(true)
  }

  console.warn(contactfetch)

  const groupsfetch = () => {
    axios.get('https://api.peckpoint.com/api/v1/groups', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => {
       addData(res.data.data)
    })
  }

 groupsfetch()

 
  async function addtogroup() {
        const item = {group_id, contact_id}
         const result = await fetch("https://api.peckpoint.com/api/v1/add-single-contacts", {
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
            if (data.success === true) {
              refreshPage()
            }
          })
        return result
        
      }

  const [modal, setModal] = useState(false)
  const [umodal, setUmodal] = useState(false)
  const [admodal, setAdmodal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [formModal, setFormModal] = useState(false)

  const deleteGroup = (id) => {

    axios.delete(`https://api.peckpoint.com/api/v1/groups/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        toast.info(res.data.message)
        if (res.data.success === true) {
          refreshPage()
        }
      })
  }

  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)
  const handleUmodal = () => setUmodal(!umodal)
  const handleAdmodal = () => setAdmodal(!admodal)

  const [dmodal, setDmodal] = useState({ id: '', name: '', description: '' })


  const updateData = (data) => {
    setDmodal(data)
    handleUmodal()
  }

  const [Admodal, setAdjmodal] = useState({ id: '', name: '', description: '' })


  const AddData = (data) => {
    setAdjmodal(data)
    handleAdmodal()
  }

 const columns = [
    {
      name: 'Name',
      minWidth: '250px',
      sortable: row => row.name,
      cell: row => (
        <div className='d-flex align-items-center'>
          <div className='user-info text-truncate ms-1'>
            <span className='d-block fw-bold text-truncate'>{row.name}</span>


          </div>
        </div>
      )
    },

    {
      name: 'Description',
      sortable: true,
      minWidth: '250px',
      selector: row => row.description
    },
    // {
    //   name: 'Status',
    //   minWidth: '150px',
    //   sortable: row => row.status.title,
    //   cell: row => {
    //     return (
    //       <Badge color={status[row.status].color} pill>
    //         {status[row.status].title}
    //       </Badge>
    //     )
    //   }
    // },

    {
      name: 'Actions',
      minWidth: '385px',
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className='d-flex'>
            <div className='w-100 dropdown-item' onClick={() => {

              updateData({ id: row.id, name: row.name, description: row.description })
            }}>
              <FileText size={15} />
              <span className='align-middle ms-50'>Update</span>
            </div>
            <div className='w-100 dropdown-item' onClick={() => {

              AddData(row.id)
            }}>
              <Archive size={15} />
              <span className='align-middle ms-50'>Add Contact</span>
            </div>
            <div className='w-100 dropdown-item' onClick={() => {

              deleteGroup(row.id)
            }}>
              <Trash size={15} />
              <span className='align-middle ms-50'>Delete</span>
            </div>
          </div>
        )
      }
    }
  ]
 

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(data.length / 7) || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
    />
  )

  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

  const handleChanged = (e) => {
    setGroupname(e.target.value)
  }

  const handleChange = (e) => {
    setContacts(e.target.value)
  }

  return (
    <Fragment>
      <Card className="groups">
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Groups</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <UncontrolledButtonDropdown>
              <DropdownToggle color='secondary' caret outline>
                <Share size={15} />
                <span className='align-middle ms-50'>Export</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>
                  <Printer size={15} />
                  <span className='align-middle ms-50'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadCSV(data)}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid size={15} />
                  <span className='align-middle ms-50'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File size={15} />
                  <span className='align-middle ms-50'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy size={15} />
                  <span className='align-middle ms-50'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Button className='ms-2' color='primary' onClick={handleModal}>
              <Plus size={15} />
              <span className='align-middle ms-50'>Add Group</span>
            </Button>
            <Button color='primary' className='importbtn' onClick={() => setFormModal(!formModal)}>
                  Add to group
                </Button>
                <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Add contact to group</ModalHeader>
          <ModalBody>
            <div className='mb-2'>
              <Label className='form-label' for='email'>
                Name:
              </Label>
                <Input
                  id="exampleSelect"
                   name="select"
                   type="select"
                   onChange={handleChanged}
                   value={group_id}  
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
 <br/>
 <FormGroup>
    <Label for="exampleSelectMulti">
      Select Multiple
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
      onChange={handleChange}
      value={contact_id}  
    >
       {
             contactfetch.map((data, index) => ([
                <option key={index} value={data.id}>
                 {data.firstname}   {data.lastname}
                </option>
                 ])
                 )
              }
    </Input>
  </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={addtogroup}>
              Add
            </Button>{' '}
          </ModalFooter>
        </Modal>
          </div>
           
        </CardHeader>
        <Row className='justify-content-end mx-0 clear-search'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='me-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <div className='react-dataTable'>
          <DataTable
            noHeader
            pagination
            columns={columns}
            paginationPerPage={7}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}
           data={searchValue.length ? filteredData : data}
          />
        </div>
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} />
      
      <UpdateModal open={umodal} data={dmodal} handleModal={handleUmodal} />
      <AddContact open={admodal} data={Admodal} handleModal={handleAdmodal} />
    </Fragment>
  )
}

export default Contact