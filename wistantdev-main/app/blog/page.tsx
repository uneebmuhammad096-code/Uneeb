import { Metadata } from 'next';
import BlogExplorer from '@/components/blog/BlogExplorer';

export const metadata: Metadata = {
    title: "WordPress, Web Development, UI/UX & SEO Articles",
    description: "Read practical articles by Muhammad Uneeb about WordPress development, web development, UI/UX design, technical SEO, AI tools and branding.",
    alternates: {canonical: "/blog"},
    robots: {index: true, follow: true},
    openGraph: {title: "Design & Development Journal | Muhammad Uneeb", description: "Practical insights on WordPress, web development, UI/UX, SEO, AI tools and brand design.", url: "/blog"},
};

const BlogPage = () => {
  return <BlogExplorer />;
};

export default BlogPage;
