import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is", email);
        console.log("password is", password);
        
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center'>

                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required 
                className='border-2 outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' 
                type="email" 
                placeholder='Enter your email' 
                />

                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required 
                className='border-2 outline-none bg-transparent border-emerald-600 text-xl  py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' 
                type="password" 
                placeholder='Enter password' 
                />

                <button className='outline-none mt-5 bg-emerald-600 text-xl text-white py-3 px-5 rounded-full border-none'>Log in</button>

            </form>
        </div>
    </div>
  )
}

export default Login