import { CartModel } from '../lib/product-model'
import dbConnect from '../lib/db-connect'

export async function lengthCart(){
  await dbConnect()
  const shopping = [...(await CartModel.find({}))]
  return shopping.reduce((acc,item)=>acc+Number(item.quantity),0)
}