import { CartModel } from '../lib/product-model'
import dbConnect from '../lib/db-connect'

export async function lengthCart(){
  await dbConnect()
  const shopping = (await CartModel.find({}))
  return shopping.length>0?shopping.length:0
}