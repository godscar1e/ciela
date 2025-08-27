import { groq } from 'next-sanity'

export const templatesQuery = groq`*[_type == "template" && !(_id in path("drafts.**"))]{
  title,
  "slug": slug.current,
  "image": image.asset->url,
  demoUrl,
  buyUrl
}`
