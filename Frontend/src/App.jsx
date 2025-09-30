import { useState } from 'react'
import Home from './pages/Home'
import {Router, Route, Routes} from 'react-router-dom'
import DonorAuth from './pages/sign-up/DonorAuth'
import RecipientAuth from './pages/sign-up/RecipientAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/donor-signup" element={<DonorAuth />} />
      <Route path='reciepient-signup' element={<RecipientAuth />} />
      </Routes>
    </>
  )
}

export default App
