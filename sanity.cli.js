/* eslint-disable no-process-env */
import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  api: {
    projectId,
    dataset,
  },
});
