import clientPromise from '@/lib/mongodb'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async function handler(req, res) {
  try {
    const {
      user: { sub },
    } = await getSession(req, res)
    const client = await clientPromise
    const db = client.db('BlogCreator')
    const userProfile = await db.collection('users').findOne({
      auth0Id: user.sub,
    })
    const { lastPostDate, geNewerPosts } = req.body
    const posts = await db
      .collection('posts')
      .find({
        userId: userProfile._id,
        createdAt: { [getNewerPosts ? '$gt' : '$lt']: new Date(lastPostDate) },
      })
      .limit(getNewerPosts ? 0 : 5)
      .sort({ createdAt: -1 })
      .toArray()
    res.status(200).json({ posts })
    return
  } catch (e) {
    console.log(e.message)
  }
})
