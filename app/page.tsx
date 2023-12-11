import Newest from '@/components/Newest'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 max-sm:p-2'>
      <header className='w-full flex flex-wrap justify-between'>
        <div className='h-[400px] w-1/3 max-sm:w-full flex flex-col items-start justify-center'>
          <h1 className='text-5xl font-extrabold mb-4'>
            Top Fashion <br />
            for a top <br />
            price!
          </h1>
          <p>
            We sell only the most exclusive and quality products for you. We are
            the best so come and shop with us.
          </p>
        </div>
        <div className='h-[400px] w-2/3 max-sm:p-2 relative'>
          <Image
            src='/HeroImages/ba06b5a3-3cc0-4730-957a-a484b2fcbaa9.webp'
            alt=''
            width={300}
            height={369}
            className='absolute top-8 left-20 z-10 max-sm:z-0 rounded-lg shadow-lg'
          />
          <Image
            src='/HeroImages/686dcf10-6030-4b31-967d-356f8b747732.webp'
            alt=''
            width={300}
            height={369}
            className='absolute top-0 left-1/2 rounded-lg shadow-lg'
          />
        </div>
      </header>
      <section className='w-full flex flex-col mt-16 '>
        <div className=' flex justify-start'>
          <Link
            href='/men'
            className='px-6 py-4 border border-slate-500 rounded-s-sm'
          >
            Men
          </Link>
          <Link
            href='/women'
            className='px-6 py-4 border border-slate-500'
          >
            Women
          </Link>
          <Link
            href='/teens'
            className='px-6 py-4 border border-slate-500 rounded-e-sm'
          >
            Teens
          </Link>
        </div>
        <Newest/>
      </section>
    </main>
  )
}
