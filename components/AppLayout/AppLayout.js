import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../logo'
import { FaCoins } from 'react-icons/fa'

export const AppLayout = ({ children }) => {
  const { user } = useUser()
  return (
    <div className='grid grid-cols-[300px_1fr] h-screen max-h-screen'>
      <div className='flex flex-col text-white overflow-hidden'>
        <div className='bg-slate-800 px-2'>
          <Logo className='w-20 h-20 mx-auto' />
          <Link href='/post/new' className='btn'>
            New Post
          </Link>
          <Link
            href='/token-topup'
            className='mt-3 text-center flex justify-center'
          >
            <FaCoins className='text-xl text-yellow-500' />{' '}
            <span className='pl-1'>0 token available</span>
          </Link>
        </div>
        <div className='flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800'>
          List of post
        </div>
        <div className='bg-cyan-800 flex items-center gap-2 border-t border-t-white/50 h-20 px-2'>
          {!!user ? (
            <>
              <div className='min-w-[50px]'>
                <Image
                  src={user.picture}
                  width={60}
                  height={60}
                  alt={`${user.name}s photo`}
                  className='rounded-full border border-white'
                />
              </div>
              <div className='flex-1'>
                <div className='font-bold'>{user.email}</div>
                <Link href='/api/auth/logout' className='text-sm'>
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <Link href='/api/auth/login'>Login</Link>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
