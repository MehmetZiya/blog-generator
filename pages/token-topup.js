import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AppLayout } from '../components/AppLayout'
import { getAppProps } from '../utils/getAppProps'

export default function TokenTopup() {
  const handleClick = async () => {
    const result = await fetch(`/api/addToken`, {
      method: 'POST',
    })
    const json = await result.json()
    console.log('RESULT: ', json)
    window.location.href = json.session.url
  }

  return (
    <div className='flex justify-center items-center'>
      <div>
        <h3 className='text-center'>
          For generate a SEO-friendly AI-based blog post You must have tokens
        </h3>
        <button className='btn w-[200px] mx-auto' onClick={handleClick}>
          Add tokens
        </button>
      </div>
    </div>
  )
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx)
    return {
      props,
    }
  },
})
