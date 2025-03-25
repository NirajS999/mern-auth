import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-300'>
      <div className='flex justify-between items-center px-12 py-4'>
        <Link to="/">
        <h1 className='font-bold text-xl'>Auth App</h1>
        </Link>
        <div className='flex gap-4 font-bold '>
            <Link to='/'>Home</Link>
            <Link to='signin'>Sign In</Link>
            <Link to='signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
