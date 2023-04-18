import { AppLayout } from '../../components/AppLayout'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function NewPost() {
  return (
    <div>
      <h2>New Post</h2>
    </div>
  )
}

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  }
})
