import fs from 'fs'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

export interface PostData {
  id: string
  code: string
  frontmatter?: object
}

const getComponents = () => {
  const componentsFiles = {}
  const componentsDirectory = path.join(process.cwd(), 'components')
  fs.readdirSync(componentsDirectory).forEach(dir => {
    const filePath = path.join(componentsDirectory, dir, dir + '.tsx')
    const fileContent  = fs.readFileSync(filePath, 'utf8')
    Object.assign(componentsFiles, { [filePath]: fileContent })
  })
  return componentsFiles
}

const postsDirectory = path.join(process.cwd(), 'posts')

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(async fileName => {
    const id = fileName.replace(/\.mdx$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { code, frontmatter } = await bundleMDX({
      source: fileContents,
      files: getComponents()
    })
    
    return {
      id,
      code,
      frontmatter
    }
  })

  return Promise.all(allPostsData) 
}

export const getPostData = async (fileName: any) => {
  const filePath = path.join(postsDirectory, `${fileName}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { code, frontmatter } = await bundleMDX({
    source: fileContents,
    files: getComponents()
  })

  return { code, frontmatter }
}