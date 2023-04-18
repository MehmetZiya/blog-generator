import { AppLayout } from '../components/AppLayout'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function TokenTopup() {
  return <div>token-topup</div>
}
TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  }
})
