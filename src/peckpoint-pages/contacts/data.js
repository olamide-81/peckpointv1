// ** Custom Components
// import Avatar from '@components/avatar'
// ** Third Party Components
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../../../@core/components/spinner/Fallback-spinner'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// ** Vars
// const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']
  
const saved = JSON.parse(localStorage.getItem('user'))
const token = saved.token

// const updateContact = (id, data) => {
//   axios.patch(`https://api.peckpoint.com/api/v1/contacts/${id}`, data, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     }
//   })
// }


{ /*async function deleteContact(id) {
   const result = await fetch(`https://api.peckpoint.com/api/v1/contacts/${id}`, {
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
}*/ }

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


let dmodal = { id: '', firstname: '', lastname: '', gender: '', dob: '', phone_number: '', email: '', address: '' }, openUodal = false

const updateData = (data) => {
  dmodal = data
  openUodal = !openUodal
}

export { dmodal, openUodal }

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'ID',
    reorder: true,
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    reorder: true,
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    reorder: true,
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    reorder: true,
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    reorder: true,
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    reorder: true,
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='fw-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='fw-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
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

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
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
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '150px',
    selector: row => row.status,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Trash size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: 'Full Name',
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    sortable: true,
    name: 'Email',
    minWidth: '250px',
    selector: row => row.email
  },
  {
    sortable: true,
    name: 'Position',
    minWidth: '250px',
    selector: row => row.post
  },
  {
    sortable: true,
    name: 'Office',
    minWidth: '150px',
    selector: row => row.city
  },
  {
    sortable: true,
    name: 'Start Date',
    minWidth: '150px',
    selector: row => row.start_date
  },
  {
    sortable: true,
    name: 'Salary',
    minWidth: '150px',
    selector: row => row.salary
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
      selector: row => row.email
  },
  {
    name: 'Post',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'City',
    sortable: true,
    minWidth: '150px',
    selector: row => row.city
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '100px',
    selector: row => row.salary
  }
]
export default ExpandableTable