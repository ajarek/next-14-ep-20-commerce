import React from 'react'
import data from '../public/Data/data.json'
import Image from 'next/image'
import Link from 'next/link'
const Newest = () => {
  // console.log(data)

  return (
    <div className='flex flex-wrap justify-evenly mt-12'>
      {data.map((el) => {
        return (
        
          <div key={el.id} className='shadow-lg rounded-lg overflow-hidden'>
            <Link href={`/newestid/${el.id}`}>
            <Image
              src={el.img}
              alt='foto'
              width={250}
              height={308}
              
            />
            <p>{el.title}</p>
            <p className='font-bold'>{el.price} $</p>
            <p>{el.category}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Newest
