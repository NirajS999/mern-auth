import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const [formData,setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = ((e) => {
    setFormData({...formData, [e.target.id]:e.target.value });
  
  })

  const handleSubmit =async (e) =>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json()     
      if(data.success === false){        
        dispatch(signInFailure(data))
        return;
      }
      dispatch(signInSuccess(data))
      navigate("/")
      console.log(data)
    } catch(error){
      dispatch(signInFailure(error))

    }

  }


  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-10'>Sign In</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 rounded-lg p-3' onChange={handleChange}  />
        <input type="password" placeholder='password' id='password' className='bg-slate-100 rounded-lg p-3' onChange={handleChange}  />

        <button disabled={loading} className='bg-blue-900 text-white p-3 rounded-lg disabled:opacity-80'>{ loading ? 'Loading...' : "Sign In"}</button>
      </form>
      <div>
        <p>Dont Have An Account ? <Link to="/signup" className="text-blue-500 font-semibold">Sign Up</Link> </p>
      </div>
      <p className='mt-5 text-red-500'>{error ? error.message || 'Something went wrong': ""}</p>
    </div>
  )
}

export default SignIn
