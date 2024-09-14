import { getDocuments } from 'outstatic/server'
import PostPreview from '../components/PostPreview'
import { Post } from '../types'

export default async function Home() {
  const posts = await getDocuments('posts', ['title', 'excerpt', 'slug']) as unknown as Post[]

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
      {posts.map((post: Post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </>
  )
}
