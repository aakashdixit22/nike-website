import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col 
    w-full max sm:w-full'>
    <img src={imgURL} alt={name} 
    className='w-[280px] h-[280 px]'/>
    <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating' width={24} height={24}/>
        <p>4.5</p>
    </div>
    <h3 className='text-2xl leading-normal font-semibold'>{name}</h3>
    <p className='font-semiblod text-coral-red text-[2xl]'>{price}</p>
    </div>
  )

}

export default PopularProductCard