import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import { steps } from "./utils/travaux";

const actualites = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/actualites",
  }),

  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    date: z.date(),
    excerpt: z.string(),
    published: z.boolean().default(true),
  }),
});

const travaux = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/travaux",
  }),

  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    published: z.boolean().default(true),
    status: z.enum(steps),
    blocked: z.boolean().default(false),
    showProgress: z.boolean().default(true),
    ag: z.string().optional(),
  }),
});

export const collections = {
  actualites,
  travaux,
};