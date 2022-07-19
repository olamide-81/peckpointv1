// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
//import { useHistory } from 'react-router-dom'
import NotificationDropdown from './NotificationDropdown'
import { useState, useEffect } from 'react'
import axios from 'axios'
//import { toast } from 'react-toastify'


// ** Third Party Components
import { Sun, Moon } from 'react-feather'

// ** Reactstrap Imports
import { Button, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input} from 'reactstrap'
import { toast } from 'react-toastify'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props
  const [formModal, setFormModal] = useState(false)
  const [amount, setAmount] = useState('')
  const [unit, SetUnit] = useState('')
  const [data, setData] = useState([])

  const unit_id = unit
  const type = "unit"

  //const history = useHistory()

  const saved = JSON.parse(localStorage.getItem('user'))
  const token = saved.token
  const user = saved.user.role.slug

  console.log(user)
  //const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    try {
      axios.get("https://api.peckpoint.com/api/v1/units", {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }).then(dataa => {
               setData(dataa.data.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  async function topup() {
    const item = {amount, unit_id, type}
     const result = await fetch("https://api.peckpoint.com/api/v1/buy-units", {
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
        window.location.replace(data.url)
      })
    return result
    
  }
  const handleChange = (e) => {
    SetUnit(e.target.value)
  }
  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      <IntlDropdown />
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
      </NavItem>
      <CartDropdown/>
     {(user === "user") ?  <Button outline onClick={() => setFormModal(!formModal)}>
                  Top Up
                </Button> : console.log('bad')}
                <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Top Up</ModalHeader>
          <ModalBody>
          <div className='mb-2'>
              <Label className='form-label' for='email'>
                Unit:
              </Label>
                <Input
                  id="exampleSelect"
                   name="select"
                   type="select"
                   onChange={handleChange}
                   value={unit}  
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
            </div>
            <br/>
            <div className='mb-2'>
              <Label className='form-label' for='amount'>
                Amount:
              </Label>
              <Input type='number' id='amount' placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value) } />
            </div>
          
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={topup}>
              Checkout
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
