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
          value={id.toString()}
        />
        <select
          name='select'
          className='h-10 outline-none border border-slate-500 text-lg mr-4 rounded-lg'
        >
          <option
            className='text-left'
            value=''
          >
            Select quantity
          </option>
          <option
            className='text-center'
            value='1'
          >
            1
          </option>
          <option
            className='text-center'
            value='2'
          >
            2
          </option>
          <option
            className='text-center'
            value='3'
          >
            3
          </option>
          <option
            className='text-center'
            value='4'
          >
            4
          </option>
          <option
            className='text-center'
            value='5'
          >
            5
          </option>
        </select>
        <Button
          type='submit'
          className='bg-violet-500 rounded-sm '
        >
          Ok
        </Button>
      </form>
    </div>
  )
}

export default FormQuantity
