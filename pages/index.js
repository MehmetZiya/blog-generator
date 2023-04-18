import Image from 'next/image'
import Hero from '../public/hero.jpeg'
import { Logo } from '../components/logo'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen overflow-hidden flex justify-center items-center relative'>
      <Image src={Hero} alt='hero' fill className='absolute' />
      <div className='relative z-10 text-white px-10 py-5 max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm'>
        <Logo />
        <p>
          The AI-powered blog creator that helps you create a blog in minutes.
        </p>
        <div className='flex justify-center items-center mt-3'>
          <Link href='/post/new' className='btn uppercase'>
            Begin
          </Link>
        </div>
      </div>
    </main>
  )
}
