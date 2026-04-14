import React from 'react'
import { useNavigate } from 'react-router-dom'

function Loginpage() {
  const navigate = useNavigate()

  return (
    <div className='h-screen w-screen bg-black'>
      <div className='flex items-center justify-center h-full'>
      <div className='bg-gray-900 p-8 rounded-lg w-96'>
        <h1 className='text-white text-3xl font-bold mb-6'>Login</h1>
        <form className='space-y-4'>
          <input
            type='email'
            placeholder='Email'
            className='w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600' />
          <input
            type='password'
            placeholder='Password'
            className='w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600' />
          <button
            type='submit'
            className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded'
          >
            Sign In
          </button>
        </form>
        <div className='mt-6 text-center'>
          <p className='text-gray-400 mb-3'>or</p>
          <button onClick={()=>{navigate('/')}}
            className='w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded'
          >
            Sign In as Guest
          </button>
        </div>
      </div>
    </div></div>
  )
}

export default Loginpage