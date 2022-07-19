// ** React Imports
import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import userimg from '../../../../assets/images/logo/logo.png'

// // ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Store & Actions
//import { useDispatch } from 'react-redux'
//import { logout } from '@store/authentication'

// ** Third Party Components
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

// ** Default Avatar Image
//import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {
  // ** Store Vars
  //const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUserData(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  const history = useHistory()

  const logout = () => {
    history.push('/login')
    localStorage.clear()
  }

  //** Vars
  const userAvatar = (userData && userData.avatar) || userimg

  const user = JSON.parse(localStorage.getItem('user'))
  const usera = user.user.role.slug

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold'>{user.user.username}</span>
          <span className='user-name fw-bold'>{user.user.role.name}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu end>
      {(usera === "user") ? <DropdownItem tag={Link} to='/pages/account-settings'>
          <Settings size={14} className='me-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem> : console.log('hello')}
        {(usera === "user") ?   <DropdownItem tag={Link} to='/pages/pricing'>
          <CreditCard size={14} className='me-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem> : console.log('hello')}
        {(usera === "user") ?    <DropdownItem tag={Link} to='/pages/faq'>
          <HelpCircle size={14} className='me-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem> : console.log('hello')}
        <DropdownItem tag={Link} to='/login' onClick={logout}>
          <Power size={14} className='me-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
