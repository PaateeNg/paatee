import React from 'react'
import planner1 from '../../../public/assets/img/planner1.png'
import Image from 'next/image'

const PlannerCard = () => {
  return (
    <>
        <div className=' w-[454px] m-3 shadow-md overflow-hidden' style={{borderRadius: "20px"}}>
            <Image src={planner1} height={163} width={454} alt="" />
            <div className='p-5'>
                <div>
                    <ul className='flex gap-3 text-sm'>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Weddings</li>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Social Gatherings</li>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Corporate</li>
                        <li className='bg-yellow-400 rounded-xl p-1 px-2'>Birthdays</li>
                    </ul>
                </div>
                <div className='mt-5 mb-3'>
                    <div>
                        <span className='font-bold '>Elevant Events by Sarah</span>
                        <div className='text-gray-500'>
                            <span>5k reviews</span>
                            <span className='ml-4'>Free to be booked</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PlannerCard