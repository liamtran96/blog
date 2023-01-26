import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from 'sanity-plugin-markdown';
import {visionTool} from '@sanity/vision'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',
  title: 'My blog',
  projectId,
  dataset,
  plugins: [deskTool(), markdownSchema(), visionTool()],
  schema: {
    types: [
      {
        title: 'My Example Document Type',
        name: 'post',
        type: 'document',
        fields: [
          {
            title: 'Greeting',
            name: 'title',
            type: 'string',
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown',
          },
          {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
          },
          {
            name: 'date',
            title: 'Date',
            type: 'datetime',
          },
        ],
      },
    ],
  },
});
