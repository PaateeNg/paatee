import React from 'react'
import LoginPage from '@/components/Login/LoginPage'
import Auth from '@/components/AUTH/Auth'
import ForgotPassword from '@/components/AUTH/ForgotPassword'
import CreateNewPassword from '@/components/AUTH/CreateNewPassword copy'
import PasswordResetSucc from '@/components/AUTH/PasswordResetSucc'

const Login  = () => {
  return (
    <>
        
        <LoginPage />
        <Auth/>
        <div className='flex'>

          <ForgotPassword/>
          <CreateNewPassword/>
          <PasswordResetSucc/>
        </div>
    </>
  )
}

export default Login 