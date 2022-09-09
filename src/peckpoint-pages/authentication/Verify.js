import React from 'react'

const Verify = () => {
    const { dataname } = useParams()
    console.warn(dataname)
  return (
    <div>Verify</div>
  )
}

export default Verify