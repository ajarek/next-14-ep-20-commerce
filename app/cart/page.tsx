import { CartModel, Cart } from '../../lib/product-model'
import dbConnect from '../../lib/db-connect'
import Image from 'next/image'
import DeleteItem from '@/components/DeleteItem'

const CartClient = async () => {
  await dbConnect()
  const shopping = (await CartModel.find({}).sort({
    _id: -1,
  })) as Cart[]
  return <div className='flex flex-col flex-wrap justify-evenly p-4 gap-2'>
  {shopping.map((el) => {
    return (
    
      <div key={el._id} className='flex justify-between  items-center px-4 py-2 shadow-lg rounded-lg overflow-hidden'>
       
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
        <DeleteItem _id={el._id}/>
      </div>
    )
  })}
</div>
}

export default CartClient
