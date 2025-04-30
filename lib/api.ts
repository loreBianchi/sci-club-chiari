import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export const activitiesDirectory = join(process.cwd(), '_activities')
export const newsDirectory = join(process.cwd(), '_news')
export const season23_24_Directory = join(process.cwd(), '_season_23_24')

export function getActivitiesSlugs(directory = activitiesDirectory) {
  return fs.readdirSync(directory)
}

export function getNewsSlugs() {
  return fs.readdirSync(newsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = [], directory = activitiesDirectory) {
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

export function getAllActivities(fields: string[] = []) {
  const slugs = getActivitiesSlugs()
  // TODO: sort posts by date in ascending order if the date is passed, otherwise descending
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, activitiesDirectory))
    // sort posts by date in ascending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
  return posts
}

export function getAllFutureActivities(fields: string[] = []) {
  const slugs = getActivitiesSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, activitiesDirectory))
    // sort posts by date in ascending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
    .filter((post) => post.date > new Date().toISOString())
  return posts
}

export function getAllPastActivities(fields: string[] = [], directory = activitiesDirectory) {
  const slugs = getActivitiesSlugs(directory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, directory))
    // sort posts by date in ascending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
    .filter((post) => post.date < new Date().toISOString())
  return posts
}

export function getPostBySlugSeason23_24(fields: string[] = []) {
  return getAllPastActivities(fields, season23_24_Directory)
}

export function getAllNews(fields: string[] = []) {
  const slugs = getNewsSlugs()
  const news = slugs
    .map((slug) => getPostBySlug(slug, fields, newsDirectory))
    // remove posts with date in the past
    .filter((post) => post.date >= new Date().toISOString())
    // sort posts by date in ascending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1))
  return news
}
