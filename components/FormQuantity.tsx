'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type Nr={
  nr:number
}


const FormQuantity = ({nr}:Nr) => {
 const [counter,setCounter]=useState<number>(nr)
 console.log(counter);
 
  return (
    <div className='flex items-center '>
      <Button onClick={()=>setCounter(counter+1)} className='bg-violet-400'>➕</Button>
      <div className='w-8 h-8 text-xl text-center'>{counter}</div>
      <Button onClick={()=>setCounter(counter-1)} className='bg-violet-400'>➖</Button>
    </div>
      
      
  )
}

export default FormQuantity
