// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { Link } from 'react-router-dom'


import ShareLink from '../../extensions/copy-to-clipboard'

// ** Table Data & Columns
import { columns } from './data'

//import { delayLog } from './delayLog'
// ** Add New Modal Component
import AddNewModal from './AddNewModal'

import UpdateModal from './Update'

import DataTable from 'react-data-table-component'

// ** Third Party Components
import ReactPaginate from 'react-paginate'

import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Plus } from 'react-feather'

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
import axios from 'axios'

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
 
  axios.get("https://api.peckpoint.com/api/v1/get-blacklist-contacts", {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(dataa => {
           addData(dataa.data.data)
  })

  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
 

  // ** Function to handle Modal toggle
  const handleModal = () => setModal(!modal)
  // ** Function to handle filter


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

  // ** Downloads CSV
  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Blacklist</CardTitle>
          <div className='flex-md-row flex-column'>
            <Button className='ms-2' color='primary' tag={Link} to='/all-contacts-blacklist' className='add-btn-contact'>
              <Plus size={15} className='plus-sign'/>
              <span className='align-middle ms-50'>All Contacts</span>
            </Button>
          </div>
        </CardHeader>
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
            data={data}
          />
        </div>
      </Card>
      <AddNewModal open={modal} handleModal={handleModal} />
    </Fragment>
  )
}

export default Contact