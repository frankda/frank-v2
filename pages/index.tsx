import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import NavigationLinks from 'components/Navigation/Navigation'
import HomeLoader from 'components/HomeLoader/HomeLoader'
import { PostData, getSortedPostsData } from 'lib/posts'

interface Props {
  allPostsData: PostData[]
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }: Props) {
  const [ isLoading, setIsLoading ] = useState(false)

  const renderPostsList = () => {
    return allPostsData.map((post: any, index: number) => (
      <div key={index}>
        <Link href={`/blogs/${post.id}`}>
          <a>
            {post.id}
          </a>
        </Link>
      </div>
    ))
  }
  
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
          {isLoading ?
            <HomeLoader finishLoading={() => setIsLoading(false)} />
            :
            <NavigationLinks />
          }
          {renderPostsList()}
        </main>
      </div>
    </>
  )
}
