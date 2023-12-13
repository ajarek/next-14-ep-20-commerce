import mongoose from 'mongoose'

export type Product = {
  _id: string
  title: string
  img: string
  img1: string
  img2: string
  price: string
  altprice: string
  description:string
}

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    price: { type: String, required: true },
    altprice: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema)
export default ProductModel