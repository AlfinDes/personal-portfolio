import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.object({
            id: z.string(),
            en: z.string(),
        }),
        excerpt: z.object({
            id: z.string(),
            en: z.string(),
        }),
        date: z.string(),
        tags: z.array(z.string()),
        lang: z.enum(['id', 'en']),
    }),
});

export const collections = {
    posts: postsCollection,
};
