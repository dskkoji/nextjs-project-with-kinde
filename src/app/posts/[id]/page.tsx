
import prisma from '@/lib/db'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}
export default async function Page({ params }: Props) {
  const { id } = params
  // const response = await fetch(`https://dummyjson.com/posts/${id}`)
  // const post = await response.json()
  const post = await prisma.post.findUnique({
    where: { 
      id: parseInt(id)
    }
  })

  if (!post) {
    notFound() 
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  )
}