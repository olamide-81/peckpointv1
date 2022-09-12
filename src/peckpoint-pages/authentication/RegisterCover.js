// ** React Imports
import { Link, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from '../../redux/authentication'
import LoadingSpinner from "../../@core/components/spinner/Fallback-spinner"

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'


// ** Styles
import '@styles/react/pages/page-authentication.scss'

const RegisterCover = () => {

  const history = useHistory()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
    phone: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  // ** Hooks
  const { skin } = useSkin()

  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

    const { name, email, password, password_confirmation, phone, username } = formData

    const dispatch = useDispatch()
  
    const { user, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
  
    useEffect(() => {
      if (isError) {
        toast.error(message)
        setIsLoading(false)
      }
  
      if (isSuccess) {
        history.push('/login')
        toast.success('Account created successfully please verify your email before logging in ')
        setIsLoading(false)
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch])
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
  
    const onSubmit = (e) => {
      setIsLoading(true)
      e.preventDefault()
  
      if (password !== password_confirmation) {
        toast.error('Passwords do not match')
      } else {
        const userData = {
          name,
          email,
          password,
          password_confirmation,
          username,
          phone
        }
        dispatch(register(userData))
      }
    }

  return (
    <div>
       {isLoading ? <LoadingSpinner /> : register}
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary ms-1'>PeckPoint</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login Cover' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' xs='12' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Adventure starts here 🚀
            </CardTitle>
            <CardText className='mb-2'>Make your sms management easy and fun!</CardText>
            <Form className='auth-register-form mt-2' onSubmit={onSubmit}>
              <div className='mb-1'>
                <Label 
                className='form-label'>
                  Name
                </Label>
                <Input type='text' 
                placeholder='johndoe' 
                autoFocus 
                name='name'
                value={name} 
               onChange={onChange}/>
              </div>
              <div className='mb-1'>
                <Label 
                className='form-label'>
                  Email
                </Label>
                <Input type='email' 
                id='email' 
                placeholder='john@example.com'  
                name='email'
                value={email} 
                onChange={onChange}/>
              </div>
              <div className='mb-1'>
                <Label 
                className='form-label'>
                  Username
                </Label>
                <Input type='text' 
                id='username' 
                placeholder='username'  
                name='username'
                value={username} 
                onChange={onChange}/>
              </div>
              <div className='mb-1'>
                <Label 
                className='form-label'>
                  Phone
                </Label>
                <Input type='number' 
                id='phonenumber' 
                placeholder='09067854673'  
                name='phone'
                value={phone} 
                onChange={onChange}/>
              </div>
              <div className='mb-1'>
                <Label 
                className='form-label'>
                  Password
                </Label>
                <InputPasswordToggle className='input-group-merge' id='register-password'  name='password'
                value={password} 
                onChange={onChange}/>
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-password'>
                  Confirm Password
                </Label>
                <InputPasswordToggle className='input-group-merge' id='confirm-password'  name='password_confirmation'
                value={password_confirmation} 
                onChange={onChange} />
              </div>
              <div className='form-check mb-1'>
                <Input type='checkbox' id='terms' />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <Button type='submit' color='primary' block disabled={isLoading}>
                Sign up
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/pages/login-cover'>
                <span>Sign in instead</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default RegisterCover
