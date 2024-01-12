import type { MetadataRoute } from 'next';
import CheckForUndefined from '../lib/checkForUndefined';

const [NEXT_PUBLIC_BASE_URL] = CheckForUndefined([
  process.env.NEXT_PUBLIC_BASE_URL,
]);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
