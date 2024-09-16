'use client'

import SocialLogin from './SocialLogin'

import { doCredentialLogin } from '@/app/actions'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginForm = () => {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget)

      const response = await doCredentialLogin(formData)

      if (!!response.error) {
        setError(response.error.message)
      } else {
        router.push('/home')
      }
    } catch (e) {
      setError('Check your Credentials')
    }
  }

  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-sm w-full'>
        <h2 className='text-2xl font-semibold text-center text-gray-700 mb-6'>
          Login
        </h2>
        <div className="text-xl text-red-500">{error}</div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email Address
            </label>
            <input
              className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-orange-400 focus:border-orange-400'
              type='email'
              name='email'
              id='email'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              className='mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-orange-400 focus:border-orange-400'
              type='password'
              name='password'
              id='password'
            />
          </div>

          <button
            className='w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in-out'
            type='submit'
          >
            Credential Login
          </button>
        </form>

        <div className='mt-6 border-t border-gray-300 pt-4'>
          <SocialLogin />
        </div>
      </div>
    </div>
  )
}

export default LoginForm
