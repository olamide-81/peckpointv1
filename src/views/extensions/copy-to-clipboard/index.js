// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import { Check } from 'react-feather'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// ** Custom Components
import Avatar from '@components/avatar'
import ExtensionsHeader from '@components/extensions-header'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, Input } from 'reactstrap'

const user = JSON.parse(localStorage.getItem('user'))


const ToastSuccess = () => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check />} />
        <h6 className='toast-title'>Copied To Clipboard !</h6>
      </div>
    </div>
  </Fragment>
)

const Clipboard = () => {
  // ** State
  const [value, setValue] = useState(user.user.invite_url)
  const [copied, setCopied] = useState(false)

  const handleCopy = ({ target: { value } }) => {
    setValue(value)
    if (copied) {
      setCopied(false)
    }
  }

  const onCopy = () => {
    setCopied(true)
    toast.success(<ToastSuccess />, {
      icon: false,
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  return (
    <Fragment>
      <Input className='inputbtn' value={value} onChange={handleCopy} /> 
        <CopyToClipboard onCopy={onCopy} text={value}>
           <Button className='sharebtn' color='primary' outline>
             Share Link
            </Button>
        </CopyToClipboard>
    </Fragment>
  )
}

export default Clipboard
