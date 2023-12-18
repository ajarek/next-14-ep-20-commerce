import { CartModel, Cart } from '../../lib/product-model'
import dbConnect from '../../lib/db-connect'
import Image from 'next/image'
import DeleteItem from '@/components/DeleteItem'
import Link from 'next/link'

const CartClient = async () => {
  await dbConnect()
  const shopping = (await CartModel.find({}).sort({
    _id: -1,
  })) as Cart[]
  return (
    <>
    {shopping.length===0?
    (
    <div className='mt-10 flex flex-col items-center justify-center gap-4'>
      <p className='text-xl text-red-500'>
      Cart Is Empty!

      </p>
      <Link className='bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg' href={'/'}>Return to the store</Link>
      </div>
      ):
    <div className='flex flex-col flex-wrap justify-evenly p-4 gap-2'>
      {shopping.map((el) => {
        return (
          <div
            key={el._id}
            className='flex justify-between  items-center px-4 py-2 shadow-lg rounded-lg overflow-hidden'
          >
            <Image
              src={el.img}
              alt='foto'
              width={50}
              height={62}
            />
            <p>{el.title}</p>
            <p className='font-bold '>{el.price} $</p>
            <p>{el.quantity}</p>
            <p>{el.pay}</p>
            <DeleteItem _id={el._id.toString()} />
          </div>
        )
      })}
      <p className='w-full text-right'>
      Together To Pay{' '}
      <span className='font-bold text-xl'>


        {(shopping.reduce(
          (acc, item) => acc + Number(item.price) * Number(item.quantity),
          0
        )).toFixed(2)} $
      </span>
      </p>
    </div>
    }
    </>
  )
}

export default CartClient
