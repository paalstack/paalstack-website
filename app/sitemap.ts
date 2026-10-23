import { projects } from '@/lib/projects'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://paalstack.com', lastModified: new Date() },
    { url: 'https://paalstack.com/about', lastModified: new Date() },
    { url: 'https://paalstack.com/services', lastModified: new Date() },
    { url: 'https://paalstack.com/process', lastModified: new Date() },
    { url: 'https://paalstack.com/technology', lastModified: new Date() },
    { url: 'https://paalstack.com/privacy', lastModified: new Date() },
    { url: 'https://paalstack.com/terms', lastModified: new Date() },
    { url: 'https://paalstack.com/projects', lastModified: new Date() },
    ...projects.map((p) => ({
      url: `https://paalstack.com/projects/${p.slug}`,
      lastModified: new Date(),
    })),
  ]
}
