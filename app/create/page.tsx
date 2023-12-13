import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from "@/components/ui/textarea"
import { Metadata } from 'next'
import { create } from '@/lib/actions'

export const metadata: Metadata = {
  title: 'Create Products',
}

const Page = () => {
  return (
    <form
      action={create}
      className='p-24 max-sm:px-2 max-sm:py-4 flex flex-col justify-evenly gap-4'
    >
      <Label htmlFor='title'>Title</Label>
      <Input
        type='text'
        name='title'
        required
        placeholder='Nike Sportswear Phoenix Fleece'
      />
      <Label htmlFor='img'>Image</Label>
      <Input
        type='text'
        name='img'
        required
        placeholder='https://freepngimg.com/thumb/tshirt/20-t-shirt-png-image-thumb.png'
      />
      <Label htmlFor='img1'>Image1</Label>
      <Input
        type='text'
        name='img1'
        required
        placeholder='https://freepngimg.com/thumb/tshirt/20-t-shirt-png-image-thumb.png'
      />
      <Label htmlFor='img2'>Image2</Label>
      <Input
        type='text'
        name='img2'
        required
        placeholder='https://freepngimg.com/thumb/tshirt/20-t-shirt-png-image-thumb.png'
      />
      <Label htmlFor='price'>Product Price $</Label>
      <Input
        type='text'
        name='price'
        required
        placeholder='520.25'
      />
      <Label htmlFor='altprice'>Product Alt Price $</Label>
      <Input
        type='text'
        name='altprice'
        required
        placeholder='520.25'
      />
      <Label htmlFor='description'>Description</Label>
      <Textarea
       
        name='description'
        required
        placeholder='Air Cushioning: The Air Force 1 was the first basketball shoe to feature....'
      />
      <Button
        className='bg-indigo-600 text-lg'
        type='submit'
      >
        Submit
      </Button>
    </form>
  )
}

export default Page