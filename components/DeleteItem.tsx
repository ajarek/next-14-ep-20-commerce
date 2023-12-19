'use client'

import { deleteItem } from '@/lib/actions'

export default function DeleteItem({ _id }: { _id: string }) {
  return (
    <form action={deleteItem}>
      <input
        type='hidden'
        name='_id'
        value={_id.toString()}
      />

      <button
        type='submit'
        className=' text-xl '
      >
        ❌
      </button>
    </form>
  )
}
