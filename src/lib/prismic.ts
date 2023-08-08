import Prismic from '@prismicio/client';

export const apiEndpoint = process.env.PRISMIC_SITE;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const client = (req = null) => {
  const options = req ? { req } : null;
  return Prismic.client(apiEndpoint, options);
};
