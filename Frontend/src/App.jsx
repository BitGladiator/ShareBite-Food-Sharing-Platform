import { useState } from 'react'
import Home from './pages/Home'
import {Router, Route, Routes} from 'react-router-dom'
import DonorAuth from './pages/sign-up/DonorAuth'
import RecipientAuth from './pages/sign-up/RecipientAuth'
import DonorDashboard from './pages/Dashboards/DonorDashboard'
import NewDonation from './pages/Forms/NewDonation'
import SchedulePickup from './pages/Forms/SchedulePickup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/donor-signup" element={<DonorAuth />} />
      <Route path='/reciepient-signup' element={<RecipientAuth />} />
      <Route path='/donor-dash' element={<DonorDashboard/>}/>
      <Route path='/donor-form' element={<NewDonation/>}/>
      <Route path='/schedule-pick' element={<SchedulePickup/>}/>
      </Routes>
    </>
  )
}

export default App
