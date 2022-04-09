// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import { Users } from 'react-feather'

// ** Custom Components
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const contactgroups = ({}) => {
  // ** State
  const [data, setData] = useState(null)
    // ** State
    const [userData, setUserData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUserData(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Users size={21} />}
      color='primary'
      stats={userData.user.is_subscribed}
      statTitle='Subscriptions'
      series={data.series}
      type='area'
    />
  ) : null
}

export default contactgroups
