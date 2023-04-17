import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'

export default function Home() {
  const { user } = useUser()

  return (
    <main>
      <Head>
        <title>Blog Generator</title>
      </Head>
      <h1>My page</h1>
      <div>
        {!!user ? (
          <>
            <div>
              <Image
                src={user.picture}
                width={120}
                height={120}
                alt={`${user.name}s photo`}
              />
              Welcome {user.name}!
            </div>
            <Link href='/api/auth/logout'>Logout</Link>
          </>
        ) : (
          <Link href='/api/auth/login'>Login</Link>
        )}
      </div>
    </main>
  )
}
