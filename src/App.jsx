import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import Nevbar from './components/Nevbar'
function App() {
  return (
    <div className='bg-black h-screen w-screen text-white'> 
    <Nevbar />
    <Routes>
      <Route path='/' element={<Homepage />} />
       <Route path='/login' element={<Loginpage />} />
    </Routes>
     </div>
  )
}

export default App