import Image from 'next/image'
import React from 'react'
import tick from ' ../../../public/assets/img/tick.png'

const PasswordResetSucc = () => {
  return (
    <>
        <div>
<<<<<<< HEAD
            <div className='w-[392px]  border m-5 p-5 rounded-2xl border-red-700 bg-[#ffecec] flex flex-col gap-5 text-center'>
=======
            <div className='w-[292px]  border m-5 p-5 rounded-2xl border-red-700 bg-[#ffecec] flex flex-col gap-5 text-center'>
>>>>>>> a25df2bb3ff37011ee441a5b7042703225abc75a
              <Image src={'/assets/img/tick.png'} height={50} width={50} alt='tick' className='m-auto flex'/>
                <span className='font-bold text-xl'>Password Reset Successful </span>
                <span className='text-gray-500'>You can now log into your account with your new password</span>
               
                <button className='bg-red-500 rounded-full mt-4 h-[3rem] text-white'>Go to business profile</button>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default PasswordResetSucc