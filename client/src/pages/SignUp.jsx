import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = ((e) => {
    setFormData({...formData, [e.target.id]:e.target.value });
  
  })

  const handleSubmit =async (e) =>{
    e.preventDefault();
    try {
      setError(false)
      setLoading(true)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json()
      setLoading(false)
      if(data.success === false){
        setError(true);
        return;
      }
      navigate("/signin")
      console.log(data)
    } catch(error){
      setLoading(false);
      setError(true)

    }

  }


  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-10'>Sign Up</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 rounded-lg p-3' onChange={handleChange} />
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 rounded-lg p-3' onChange={handleChange}  />
        <input type="password" placeholder='password' id='password' className='bg-slate-100 rounded-lg p-3' onChange={handleChange}  />

        <button disabled={loading} className='bg-blue-900 text-white p-3 rounded-lg disabled:opacity-80'>{ loading ? 'Loading...' : "Sign Up"}</button>
      </form>
      <div>
        <p>Have An Account ? <Link to="/signin" className="text-blue-500 font-semibold">Sign In</Link> </p>
      </div>
      <p className='mt-5 text-red-500'>{error && 'Something went wrong'}</p>
    </div>
  )
}

export default SignUp
