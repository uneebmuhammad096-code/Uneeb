import {MetadataRoute} from 'next';
import {siteUrl} from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url: siteUrl},
    ...["/projects", "/services", "/contact"].map((path) => ({
      url: `${siteUrl}${path}`,
    })),
  ];
}
