import { defineCollection, z } from "astro:content"

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    images: z.object({
      src: z.string().optional(),
      alt: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
    lang: z.enum(["en", "es"]).default("en"),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
    author: z.string(),
  }),
})

export const collections = {
  docs: docsCollection,
}
