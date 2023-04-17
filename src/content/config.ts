import { defineCollection, z } from "astro:content"

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    images: z.object({
      src: z.string().optional(),
      alt: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
    lang: z.enum(["en", "es"]).default("en"),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
  }),
})

export const collections = {
  blog: blogCollection,
}
