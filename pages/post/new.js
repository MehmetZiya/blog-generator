import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function NewPost() {
  return <div>Post</div>
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  }
})
