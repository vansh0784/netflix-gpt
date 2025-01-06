import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div className='relative'>
      <img className="absolute w-full h-auto object-cover "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          alt="bg-cover"
        />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-75 z-10"></div>
      <Header/>
      <div className='bg-black text-white rounded-md bg-opacity-90 px-10 py-4 shadow-xl absolute my-36 text-center mx-auto right-0 left-0 w-3/12 z-10'>
        <form onSubmit={(e)=>{e.preventDefault()}}
          className='text-center text-white'>
            <h1 className='text-left py-4 font-bold text-3xl my-4'>Sign In</h1>
            <input className='outline-none px-3 py-3 my-2 mx-auto border opacity-50 rounded-sm bg-slate-900 w-full'
             type="text" placeholder='Email or phone number' />
            <input className='outline-none px-3 py-3 my-2 mx-auto border opacity-50 rounded-sm bg-slate-900 w-full' type="password" placeholder='Password'/>
            <button className='bg-red-600 my-3 px-3 rounded-sm py-3 text-center w-full'>Sign In</button>
            <h3>OR</h3>
            <button className='bg-gray-600 rounded-sm my-3 px-3 py-3 text-center w-full'>Use a sign-in code</button>
            <a href="/forgotPassword" className='my-3 px-2 py-1' >Forgot password?</a>
            <div className="flex items-left mt-4">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              name="rememberMe"
            />
            <label htmlFor="rememberMe" className="text-base">
              Remember Me
            </label>
          </div>
          <div className='text-left text-white my-3'>
              <h6 className='text-gray-400 my-3'>New to netflix <a href="/signup" className='text-white font-bold'>Sign up now</a></h6>
              <p className='text-xs my-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-700 px-1 text-xs'>Learn more.</span></p>
          </div>
        </form>
      </div>
      </div>

  )
}

export default Login;