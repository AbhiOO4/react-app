import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex justify-center items-center h-screen text-white font-semibold'>
        <form action="POST" className='px-4'>
            <p className='py-2'>EMAIL ADDRESS</p>
            <input type="email" placeholder='abhinav123@gamil.com' name='' id='' className='mb-3 rounded-lg px-1'/>
            <p className='py-2' >PASSWORD </p>
            <input type="password" placeholder='password' name='' id=''  className='mb-4 rounded-lg px-1'/><br />
            <input type="submit" value='Login'  className="bg-cyan-950 hover:bg-cyan-500 rounded-3xl px-8 py-1 text-white font-medium"/>
        </form>

        <p className='px-3'>OR</p>

        <Link className="bg-cyan-950 hover:bg-cyan-500 rounded-3xl px-8 py-1 text-white font-medium" to="/Signup">Sign-up</Link>

    </div>
  )
}

export default Login