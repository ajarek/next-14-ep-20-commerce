'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { lengthCart } from '@/lib/length'
import { Button } from './ui/button'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Men',
    url: '/men',
  },
  {
    id: 3,
    title: 'Women',
    url: '/women',
  },
  {
    id: 4,
    title: 'Teens',
    url: '/teens',
  },
  {
    id: 5,
    title: 'Create',
    url: '/create',
  },
]

const Navbar = () => {
  const [state, setState] = useState(false)

  return (
    <nav className=' w-full border-b-2   max-md:border-0'>
      <div className=' items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 '>
        <div className='flex items-center justify-between py-3 md:py-5 md:block '>
          <Link href='/'>
            <h1 className='text-3xl font-bold text-purple-600'>Commerce</h1>
          </Link>
          <div className='md:hidden'>
            <Button
              className=' outline-none p-2 rounded-md focus:border-gray-400 focus:border'
              onClick={() => setState(!state)}
            >
              <Menu />
            </Button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'flex' : 'hidden '
          }`}
        >
          <ul className='justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
            {links.map((item) => (
              <li
                key={item.id}
                className='text-xl  hover:text-indigo-600'
              >
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            href='/cart'
            className='mr-4 text-2xl'
          >
            🛒<sup>{lengthCart()}</sup>
          </Link>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
