import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div>
      <img className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          alt="bg-cover"
        />
      <Header/>
      <div className='bg-black px-4 py-4 absolute my-36 mx-auto right-0 left-0 w-3/12'>
        <h1 className='text-white px-4 py-4 font-bold text-3xl'>Sign In</h1>
        <form onSubmit={(e)=>{e.preventDefault()}}
          className='text-center'>
            <input className='outline-none px-2 py-1 my-4 bg-slate-900'
             type="text" placeholder='Email or phone number' />
            <input className='outline-none px-2 py-1 bg-slate-900' type="password" placeholder='Password' />
            <button className='bg-red-600 my-4 text-white '>Submit</button>
        </form>
      </div>
      </div>

  )
}

export default Login