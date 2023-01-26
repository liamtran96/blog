import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',
  title: 'My blog',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [
      {
        title: 'My Example Document Type',
        name: 'exampleDocumentType',
        type: 'document',
        fields: [
          {
            title: 'Greeting',
            name: 'greeting',
            type: 'string',
          },
        ],
      },
    ],
  },
});
