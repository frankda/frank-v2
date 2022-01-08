import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { getMDXComponent } from 'mdx-bundler/client'
import fs from 'fs'
import path from 'path'

import { PostData, getPostData } from 'lib/posts'

interface Props {
  postData: PostData
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: {params: {slug: string}}) {
  const postData = await getPostData(slug)
  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }: Props) => {
  const router = useRouter()
  const { slug } = router.query
  const Component = useMemo(() => getMDXComponent(postData.code), [postData.code])

  return (
    <div>
      <h1>{slug}</h1>
      <Component />
    </div>
  )
}

export default Post