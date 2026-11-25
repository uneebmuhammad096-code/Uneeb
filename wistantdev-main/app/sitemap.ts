import type {MetadataRoute} from 'next';
import {blogPosts} from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = 'https://uneeb.vercel.app';

    const publicPages: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/services`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/projects`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact`,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ];

    const publishedArticles: MetadataRoute.Sitemap = blogPosts
        .filter(post => post.status === 'published')
        .filter((post, index, posts) =>
            posts.findIndex(candidate => candidate.slug === post.slug) === index
        )
        .map(post => ({
            url: `${siteUrl}/blog/${encodeURIComponent(post.slug)}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: 'monthly',
            priority: 0.7,
        }));

    return [...publicPages, ...publishedArticles];
}
