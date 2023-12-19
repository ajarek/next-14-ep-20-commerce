import mongoose from 'mongoose'

export type Product = {
  _id: string
  title: string
  img: string
  img1: string
  img2: string
  price: string
  quantity: string
  altprice: string
  category: string
  description: string
}

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    altprice: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models?.Product || mongoose.model('Product', productSchema)
export default ProductModel

export type Cart = {
  _id: string
  title: string
  img: string
  price: string
  quantity: string
  pay: string
}

const cartSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    pay: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const CartModel =
  mongoose.models?.Cart || mongoose.model('Cart', cartSchema)
