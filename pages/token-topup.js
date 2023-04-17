import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function TokenTopup() {
  return <div>token-topup</div>
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  }
})
