'use client'
import { Button } from '@/components/ui/button'
import { addToCart } from '@/lib/actions'
type AppProps = {
  id: string;
}

const AddCart = ({id}:AppProps) => {
  
  return (
    <form
    action={addToCart}
    className='px-24 py-4 max-sm:px-2 max-sm:py-4 flex flex-col justify-evenly gap-4'
  >
    <input type="hidden" name="_id" value={id} />
   <Button  className='bg-violet-700 w-fit px-6 py-2 text-white rounded-sm hover:bg-violet-500 transition-all shadow-lg' type='submit'>Add To Cart</Button>
    </form>
     
  )
}

export default AddCart