import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
export const activitiesDirectory = join(process.cwd(), '_activities')
export const newsDirectory = join(process.cwd(), '_news')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getActivitiesSlugs() {
  return fs.readdirSync(activitiesDirectory)
}

export function getNewsSlugs() {
  return fs.readdirSync(newsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = [], directory = postsDirectory) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}


export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllActivities(fields: string[] = []) {
  const slugs = getActivitiesSlugs()
  // TODO: sort posts by date in ascending order if the date is passed, otherwise descending
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, activitiesDirectory))
    // sort posts by date in ascending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
  return posts
}

export function getAllNews(fields: string[] = []) {
  const slugs = getNewsSlugs()
  const news = slugs
    .map((slug) => getPostBySlug(slug, fields, newsDirectory))
    // sort posts by date in ascending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
  return news
}
