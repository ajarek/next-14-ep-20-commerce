import { Button } from '@/components/ui/button'
import { selectQuantity } from '@/lib/actions'

type AppProps = {
  id: string
}

const FormQuantity = ({ id }: AppProps) => {
  return (
    <div className='flex items-center '>
      <form action={selectQuantity}>
        <input
          type='hidden'
          name='_id'
          value={id}
        />
        <select name='select'>
          <option value=''>Select quantity</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <Button type='submit'>Ok</Button>
      </form>
    </div>
  )
}

export default FormQuantity
