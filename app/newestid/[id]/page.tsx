import FormQuantity from '@/components/FormQuantity'
import AddCart from '@/components/addcart'
import dbConnect from '@/lib/db-connect'
import ProductModel, { Product } from '@/lib/product-model'
import Image from 'next/image'
import Link from 'next/link'

const NewestId = async ({ params }: { params: { id: string } }) => {
  await dbConnect()
  const { id } = params
  const newestElement = await ProductModel.findById(id)

  return (
    <div className='grid grid-cols-2 px-24 py-12 place-items-center'>
      <div className='grid grid-cols-2 place-items-center'>
        <div className='flex flex-col gap-4'>
          <Image
            src={newestElement?.img as string}
            alt='foto'
            width={100}
            height={123}
          />
          <Image
            src={newestElement?.img1 as string}
            alt='foto'
            width={100}
            height={123}
          />

          <Image
            src={newestElement?.img2 as string}
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
        <p className=' text-xl'>{newestElement?.title} </p>
        <p className=' text-lg capitalize'>
          category: {newestElement?.category}{' '}
        </p>
        <div className='flex items-center'>
          <p className='font-bold text-xl'>{newestElement?.price} $</p>
          <p className='line-through ml-4 text-red-400'>
            {newestElement?.altprice} $
          </p>
        </div>
        <FormQuantity id={newestElement._id} />
        <p>
          You have selected Quantity :{' '}
          <span className='text-xl font-bold'>{newestElement?.quantity}</span>{' '}
        </p>
        <p>{newestElement?.description} </p>

        <AddCart id={id} />
      </div>
    </div>
  )
}

export default NewestId
