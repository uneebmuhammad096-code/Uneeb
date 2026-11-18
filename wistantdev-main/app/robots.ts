import {MetadataRoute} from 'next';
import {siteUrl} from '@/lib/siteConfig';

export default function robots(): MetadataRoute.Robots {
    if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
        return {
            rules: [{userAgent: '*', disallow: '/'}],
        };
    }

    return {
        rules: [
            {
                userAgent: ['GPTBot', 'Google-Extended', 'CCBot'],
                disallow: '/',
            },
            {
                userAgent: '*',
                disallow: [
                    '/admin',
                    '/api/',
                ],
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
