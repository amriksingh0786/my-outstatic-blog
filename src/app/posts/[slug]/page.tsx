import { getDocumentPaths, getDocumentBySlug } from '../../../lib/outstatic'
//import { Post } from '../../../types'

export async function generateStaticParams() {
  const paths = await getDocumentPaths('posts')
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getDocumentBySlug('posts', params.slug, ['title', 'content'])

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}