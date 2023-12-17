'use server'
import { revalidatePath } from 'next/cache'
import ProductModel,{ CartModel} from './product-model'
import dbConnect from './db-connect'
import { z } from 'zod'
import { redirect } from 'next/navigation'

export async function create(formData: FormData) {
  const userSchema = z.object({
    title: z.string(),
    img: z.string(),
    img1: z.string(),
    img2: z.string(),
    price: z.string(),
    quantity: z.string(),
    altprice: z.string(),
    category:z.string(),
    description:z.string(),
  })

  const productData = userSchema.parse({
    title: formData.get('title'),
    img: formData.get('img'),
    img1: formData.get('img1'),
    img2: formData.get('img2'),
    price: formData.get('price'),
    quantity: formData.get('price'),
    altprice: formData.get('altprice'),
    category: formData.get('category'),
    description: formData.get('description'),
  })

  if (!productData) {
    return { message: 'Form data is not valid' }
  }
  try {
    await dbConnect()
    const product = new ProductModel(productData)
    
    
    await product.save()
    revalidatePath('/')
    return { message: `Created product ${productData.title}` }
  } catch {
    return { message: 'Failed to create product' }
  } finally {
    redirect('/')
  }
}
export async function addToCart(formData: FormData) {
    const schema = z.object({
      _id: z.string().min(1),
     
    })
    const data = schema.parse({
      _id: formData.get('_id'),
      
    })
    try {
          await dbConnect()
          let productId = await ProductModel.findById({ _id:data._id })
          const payAll=productId.price*productId.quantity
          const cartProduct={
            title: productId.title,
            img: productId.img,
            price: productId.price,
            quantity: productId.quantity,
            pay:payAll
          }
          const dataCart = new CartModel(cartProduct)
         
          await dataCart.save()
       revalidatePath('/')
          return { message: `Deleted product ${dataCart._id}` }
        } catch (e) {
          return { message: 'Failed to delete product' }
        }finally {
          redirect('/')
        }
  }
  
  export async function selectQuantity(formData: FormData) {
    const ile={
      select:formData.get('select'),
      _id: formData.get('_id'),
    }
    
    try {
      await dbConnect()
      let productId = await ProductModel.findById({ _id:ile._id })
      const update = { quantity: ile.select }
      const filter= {_id:ile._id}
      
      await ProductModel.findOneAndUpdate(filter, update, {
        new: true
      });
     
      
 
      return { message: `Update product ${productId._id}` }
    } catch (e) {
      return { message: 'Failed to delete product' }
    }
   }


export async function deleteItem(formData: FormData) {
  const schema = z.object({
    _id: z.string().min(1),
    
  })
  const data = schema.parse({
    _id: formData.get('_id'),
    
  })

  try {
    await dbConnect()
    await CartModel.findOneAndDelete({ _id: data._id })
    revalidatePath('/')
    console.log({ message: `Deleted product ${data._id}` })
    return { message: `Deleted product ${data._id}` }
  } catch (e) {
    return { message: 'Failed to delete product' }
  }
}

// export const updateProduct = async (formData: FormData ) => {
//   const userSchema = z.object({
//     _id: z.string().min(1),
//     image: z.string(),
//     name: z.string(),
//     price: z.string(),
//     rating: z.string(),
//   })

//   const newProductData = userSchema.parse({
//     _id: formData.get('id'),
//     image: formData.get('image'),
//     name: formData.get('name'),
//     price: formData.get('price'),
//     rating: formData.get('rating'),
//   })
//   console.log(newProductData._id)
  
//   try {
//     await dbConnect()
    
//     let productId = await ProductModel.findById({ _id: newProductData._id })

//     if (!productId) throw new Error('product not found')

    

//     await ProductModel.updateOne({ _id: productId }, newProductData);
//     revalidatePath('/')
//     return { success: true }
//   } catch (err) {
//     throw err
//   }
//   finally {
//     redirect('/')
//   }
// }