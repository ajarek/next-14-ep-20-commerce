'use client'

import { useParams } from 'next/navigation'
import data from '../../../public/Data/data.json'
import Image from 'next/image'
import Link from 'next/link'

const NewestId = () => {
  const params = useParams()
  const id =Number(params.id)
  const newestElement=data.find(el=>el.id===id)
  return (
    <div className='grid grid-cols-2 px-24 py-12 place-items-center'>
      <div className='grid grid-cols-2 place-items-center'>
        <div className='flex flex-col gap-4' >
        <Image
              src={newestElement?.img as string}
              alt='foto'
              width={100}
              height={123}
              
            /><Image
            src={newestElement?.img1 as string}
            alt='foto'
            width={100}
            height={123}
            
          />
          
          <Image
          src={newestElement?.img2 as string }
          alt='foto'
          width={100}
          height={123}
          
        />
        </div>
        <div>

      <Image
              src={newestElement?.img as string}
              alt='foto'
              width={250}
              height={308}
              
            />
        </div>
      </div>
      <div className='flex flex-col justify-center px-8 gap-4'>
      <p>{newestElement?.category} </p>
      <p className=' text-xl'>{newestElement?.title} </p>
      <div className='flex items-center'>
      <p className='font-bold text-xl'>{newestElement?.price} $</p>
      <p className='line-through ml-4 text-red-400'>{newestElement?.altprice} $</p>
      </div>
      <p>{newestElement?.description} </p>
      <Link className='bg-violet-700 w-fit px-6 py-2 text-white rounded-sm hover:bg-violet-500 transition-all shadow-lg' href={'/cart'}>Add To Cart</Link>
      </div>
      
      

    </div>
  )
}

export default NewestId