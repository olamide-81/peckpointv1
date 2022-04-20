// ** Reactstrap Imports
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Badge, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'

const CartDropdown = () => {

  const user = JSON.parse(localStorage.getItem('user'))
 // const wallet = () => {
   // if (user.user.unit_balance === null) {
  //    return ('$0')
  //  } else {
  //    return (user.user.unit_balance)
 //   }
//  }

const wallet = (user.user.unit_balance === "") ? '$0' : user.user.unit_balance

  return (
   <h6 className='balance-header'>Balance<br/>{wallet}</h6>
  )
}

export default CartDropdown
