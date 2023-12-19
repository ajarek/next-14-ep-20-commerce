import mongoose from 'mongoose'

export default async function dbConnect() {
  try {
    const uri = process.env.MONGODB_URI
    if (uri) {
      await mongoose.connect(uri)
    } else {
      throw new Error('MONGODB_URI nie jest ustawiony')
    }
  } catch (error) {
    throw new Error('Connection failed!')
  }
}
