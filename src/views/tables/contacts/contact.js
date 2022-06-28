// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ShareLink from '../../extensions/copy-to-clipboard'

//import { delayLog } from './delayLog'
// ** Add New Modal Component
import AddNewModal from './AddNewModal'

import UpdateModal from './Update'

import DataTable from 'react-data-table-component'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

import { ChevronDown, Share, Trash, Printer, FileText, File, Grid, Copy, Plus } from 'react-feather'

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
  Table
} from 'reactstrap'
//import axios from 'axios'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className='form-check'>
    <Input type='checkbox' ref={ref} {...props} />
  </div>
))

const Contact = () => {
  // ** States
  const [data, addData] = useState([])
  
  
  // const [mdata, addMdata] = useState({}) 
  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token

  useEffect(async () => {
    const resultsender = await fetch("https://api.peckpoint.com/api/v1/contacts", {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     addData(resultsender.data)
     }

  }, [])

  const [modal, setModal] = useState(false)
  const [umodal, setUmodal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)
  const handleUmodal = () => setUmodal(!umodal)

  function refreshPage() {
    window.location.reload(true)
  }

  const deleteContact = (id) => {
    axios.delete(`https://api.peckpoint.com/api/v1/contacts/${id}`, {
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
  }

  const [dmodal, setDmodal] = useState({ id: '', firstname: '', lastname: '', gender: '', dob: '', phone_number: '', email: '', address: '' })

  const updateData = (data) => {
    setDmodal(data)
    setUmodal(true)
  }


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

  const columns = [
    {
      name: 'Name',
      minWidth: '250px',
      sortable: row => row.fullname,
      cell: row => (
        <div>
          <div className='d-flex align-items-center'>

            <div className='user-info text-truncate ms-1'>
              <span className='d-block fw-bold text-truncate'>{row.firstname} {row.lastname}</span>


            </div>
          </div>
        </div>
      )
    },

    {
      name: 'Phone Number',
      sortable: true,
      minWidth: '250px',
      selector: row => row.phone_number
    },

    {
      name: 'Email',
      sortable: true,
      minWidth: '250px',
      selector: row => row.email
    },

    {
      name: 'Date',
      sortable: true,
      minWidth: '150px',
      selector: row => row.created_at
    },

    {
      name: 'Gender',
      sortable: false,
      minWidth: '150px',
      selector: row => row.gender
    },

    {
      name: 'DOB',
      sortable: true,
      minWidth: '100px',
      selector: row => row.dob
    },

    {
      name: 'Actions',
      allowOverflow: true,
      minWidth: '250px',
      cell: (row) => {
        return (
          <div className='d-flex'>
            <div className='w-100 dropdown-item' onClick={e => {
              e.preventDefault()
              updateData({ id: row.id, firstname: row.firstname, lastname: row.lastname, gender: row.gender, dob: row.dob, phone_number: row.phone_number, email: row.email })
            }}>
              <FileText size={15} />
              <span className='align-middle ms-50'>Update</span>
            </div>
            <div className='w-100 dropdown-item' onClick={e => {
              e.preventDefault()
              deleteContact(row.id)
            }} >
              <Trash size={15} />
              <span className='align-middle ms-50'>Delete</span>
            </div>
          </div>
        )
      }
    }
  ]

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

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Contacts</CardTitle>
          <div className='flex-md-row flex-column'>
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
                <DropdownItem className='w-100'  tag={Link} to='/directory'>
                  <Grid size={15} />
                  <span className='align-middle ms-50'>Directory</span>
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
            <ShareLink/>
            <UncontrolledButtonDropdown className='add-btn-contact importbtn'>
              <DropdownToggle color='secondary' caret outline>
                <Share size={15} />
                <span className='align-middle ms-50'>Import</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100' onClick={() => downloadCSV(data)}>
                  <FileText size={15} />
                  <span className='align-middle ms-50'>CSV</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Button className='ms-2 add-btn-contact' color='primary' onClick={handleModal}>
              <Plus size={15} className='plus-sign'/>
              <span className='align-middle ms-50'>Add Contact</span>
            </Button>
          </div>
           
        </CardHeader>
        <Row className='justify-content-end mx-0'>{/**/}
          <Col className='clear-search' md='6' sm='12' >
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
      
      <UpdateModal open={umodal} data={dmodal} handleModall={handleUmodal} />
    </Fragment>
  )
}

export default Contact