import React from 'react'
import dbConnect from '@/lib/db-connect'
import ProductModel, { Product } from '@/lib/product-model'
import Link from 'next/link'
import Image from 'next/image'
const Teens = async () => {
  await dbConnect()
  const products = (await ProductModel.find({ category: 'teens' }).sort({
    _id: -1,
  })) as Product[]
  return (
    <div className='flex flex-wrap justify-evenly mt-12'>
      {products.map((el) => {
        return (
          <div
            key={el._id}
            className='shadow-lg rounded-lg overflow-hidden'
          >
            <Link href={`/newestid/${el._id}`}>
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

export default Teens
