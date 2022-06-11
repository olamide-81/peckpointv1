// ** React Imports
import { useRef, useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom"
// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Confirm from './pricecheckout/Confirm'
import CartDetails from './pricecheckout/CartDetails'

// ** Icons Imports
import { FileText, User, MapPin, Link, ShoppingCart, CreditCard } from 'react-feather'

const Checkout = () => {
  // ** Ref
  const saved = JSON.parse(localStorage.getItem('user'))
const token = saved.token
const [dataa, setData] = useState('')

const { dataname } = useParams()
console.warn(dataname)
const id = dataname

useEffect(async() => {
    const resultsender = await fetch(`https://api.peckpoint.com/api/v1/plans/${id}`, {
        headers: {
         Authorization: `Bearer ${token}`
        }
     }).then(res => res.json())

    if (resultsender.success) {
     setData(resultsender.data)
     }

  }, [])

  console.warn(dataa)

  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'cart-details',
      title: 'Cart Details',
      subtitle: 'Confirm Your Cart Details.',
      icon: <ShoppingCart size={18} />,
      content: <CartDetails stepper={stepper} type='modern-vertical' />
    },
    {
        id: 'step-address',
        title: 'Choose Payment options',
        subtitle: 'Select Payment Option',
        icon: <CreditCard size={18} />,
        content: <Confirm stepper={stepper} type='modern-vertical' />
      }
  ]

  return (
    <div className='modern-vertical-wizard'>
      <Wizard
        type='modern-vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default Checkout
