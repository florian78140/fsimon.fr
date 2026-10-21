import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Parcours pro et formation
const parcours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/parcours' }),
  schema: z.object({
    titre: z.string(),
    organisation: z.string(),
    lieu: z.string().optional(),
    periode: z.string(),            // texte affiché, ex. « Juin 2016 – aujourd'hui »
    type: z.enum(['pro', 'formation']),
    ordre: z.number(),              // plus grand = affiché en premier
    lien: z.string().url().optional(),
  }),
});

// Associations, rôles bénévoles, activités à côté
const engagements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/engagements' }),
  schema: z.object({
    titre: z.string(),
    role: z.string(),
    periode: z.string(),
    ordre: z.number(),
    lien: z.string().url().optional(),
  }),
});

// Sites et projets réalisés
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    annee: z.string(),
    tags: z.array(z.string()).default([]),
    lien: z.string().url().optional(),
    ordre: z.number(),
    archive: z.boolean().default(false),
  }),
});

export const collections = { parcours, engagements, projets };
