import type { MetadataRoute } from 'next';
import CheckForUndefined from '../lib/checkForUndefined';

const [NEXT_PUBLIC_BASE_URL] = CheckForUndefined([
  process.env.NEXT_PUBLIC_BASE_URL,
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    {
      url: NEXT_PUBLIC_BASE_URL,
    },
  ];

  return staticPaths;
}
