import Image from 'next/image'
import React from 'react'
import cake1 from '../../../public/assets/img/cake1.png'
import cart from '../../../public/assets/img/shopping-cart.png'

const ProductCard = () => {
  return (
    <>
        <div className='flex flex-col'>
            <div className='relative'>
            <Image height={267} width={360} className="" src={cake1} alt="" />
                <span className='absolute top-4 left-5 bg-yellow-400 rounded-xl p-1 px-3 font-bold'>New</span>
            </div>
            <div className='p-5 text-lg flex gap-20'>
                <div className='flex flex-col'>
                    <span>2 layer fruit cake</span>
                    <span className='text-xl font-bold'>$14</span>
                </div>
                <div className='relative left-[1px] '>
                    <div className='bg-gray-500 h-[40px] w-[40px] '>

                        <Image height={24} width={24} className="" src={cart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard