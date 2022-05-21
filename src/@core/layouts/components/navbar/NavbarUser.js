// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
import { useState } from 'react'


// ** Third Party Components
import { Sun, Moon } from 'react-feather'

// ** Reactstrap Imports
import { Button, NavItem, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input} from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props
  const [formModal, setFormModal] = useState(false)
  const [amount, setAmount] = useState('')

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
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
      <Button outline onClick={() => setFormModal(!formModal)}>
                  Top Up
                </Button>
                <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Top Up</ModalHeader>
          <ModalBody>
            <div className='mb-2'>
              <Label className='form-label' for='amount'>
                Amount:
              </Label>
              <Input type='number' id='amount' placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value) }  />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary'>
              Checkout
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
