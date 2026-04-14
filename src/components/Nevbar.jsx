import React from 'react'
import { Link } from 'react-router-dom'

function Nevbar() {
  return (
    <nav className='h-16 w-full bg-black flex items-center justify-between px-8 text-white'>
      <div className='text-2xl font-bold text-red-600'>Netflix</div>
      <div className='flex space-x-8'>
        <Link to="/" className='hover:text-red-600'>Home</Link>
        <Link to="/?category=tv-shows" className='hover:text-red-600'>TV Shows</Link>
        <Link to="/?category=movies" className='hover:text-red-600'>Movies</Link>
        <Link to="/?category=video-games" className='hover:text-red-600'>Video Games</Link>
      </div>
      <div>Profile</div>
    </nav>
  )
}

export default Nevbar