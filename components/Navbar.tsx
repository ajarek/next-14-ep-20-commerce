import Link from "next/link"

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
 
]

const Navbar = () => {
  

  return (
    <div className='flex justify-between items-center px-10 h-16 '>
      <Link
        href='/'
        className=''
      >
        <h1 className='text-xl font-normal'>Commerce</h1> 
      </Link>
      <div className='flex items-center text-center gap-4'>
        
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className=''
          >
            {link.title}
          </Link>
        ))}
        
      
      </div>
      <Link href='/'>🛒</Link>
    </div>
  )
}

export default Navbar