export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    publishedAt: string;
    image?: string;
    tags: string[];
    readingTime?: number;
}

export const blogPosts: BlogPost[] = [];
