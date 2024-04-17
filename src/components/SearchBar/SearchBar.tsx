import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className='h-[44px] w-[398px] p-1 border mb-5 ml-4 px-3 flex items-center justify-between rounded-full'>
            <div className='flex gap-2 items-center justify-center'>
                <Image alt='serch-icon' width={15} height={15} src="/assets/img/search-normal.png"/>
                <span className='text-gray-300 text-xl'>Search party planner</span>
            </div>
            <div>
                <button className='bg-red-500 rounded-full h-[32px] w-[87px] px-3 py-2 text-xl text-white flex items-center'>Search</button>
            </div>
        </div>
    </>
  )
}

export default SearchBar