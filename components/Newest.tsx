import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dbConnect from '@/lib/db-connect'
import ProductModel, { Product } from '@/lib/product-model'
const Newest = async () => {
  await dbConnect()
  const products = (await ProductModel.find({}).sort({
    _id: -1,
  })) as Product[]

  return (
    <div className='flex flex-wrap justify-evenly mt-12'>
      {products.map((el) => {
        return (
        
          <div key={el._id} className='shadow-lg rounded-lg overflow-hidden'>
            <Link href={`/newestid/${el._id}`}>
            <Image
              src={el.img}
              alt='foto'
              width={250}
              height={308}
              
            />
            <p>{el.title}</p>
            <p className='font-bold'>{el.price} $</p>
            <p>Men/Women/Teens</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Newest
