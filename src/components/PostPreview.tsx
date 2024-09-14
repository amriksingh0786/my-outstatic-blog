
import Link from 'next/link'
import { Post } from '../types'

export default function PostPreview({ title, excerpt, slug }: Post) {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-2">
        <Link href={`/posts/${slug}`} className="text-blue-600 hover:text-blue-800">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600">{excerpt}</p>
    </div>
  )
}