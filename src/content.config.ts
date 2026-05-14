import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const categories = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/categories" }),
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(),
    order: z.number().default(100),
    links: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        description: z.string().optional(),
      })
    ),
  }),
});

export const collections = { categories };
