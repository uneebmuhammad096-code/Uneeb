import { Metadata } from 'next';
import BlogExplorer from '@/components/blog/BlogExplorer';

export const metadata: Metadata = {
    title: "Web Development, AI, SEO & WordPress Articles",
    description: "Read practical articles by Muhammad Uneeb about AI, WordPress, web development, UI/UX, JavaScript and SEO.",
    alternates: {canonical: "/blog"},
    robots: {index: true, follow: true},
    openGraph: {title: "Blog | Muhammad Uneeb", description: "Practical insights on AI, WordPress, web development, UI/UX, JavaScript and SEO.", url: "/blog"},
};

const BlogPage = () => {
  return <BlogExplorer />;
};

export default BlogPage;
