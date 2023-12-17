'use client'

import { deleteItem } from '@/lib/actions'

export default function DeleteItem({  _id,}: {  _id: string}) {
  return (
    <form
      action={deleteItem}
    >
      <input
        type='hidden'
        name='_id'
        value={_id}
      />
      
      <button
        type='submit'
        className='max-lg:text-xl text-2xl '
      >
        ❌
      </button>
    </form>
  )
}