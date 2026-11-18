import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from '@/lib/blogData';

export const metadata: Metadata = {
    title: "Articles",
    description: "Notes and articles on WordPress development, web design, website audits, and on-page SEO by Muhammad Uneeb.",
    alternates: {canonical: "/blog"},
    robots: {index: false, follow: true},
    openGraph: {title: "Articles | Muhammad Uneeb", description: "Notes and articles on WordPress development, web design, website audits, and on-page SEO by Muhammad Uneeb.", url: "/blog"},
};

const BlogPage = () => {
  const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
      <section className="py-20 bg-background min-h-screen">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
                      Articles & Notes
                  </h1>
                  <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                      A space for practical notes on WordPress, web design, website reviews, and on-page SEO.
                  </p>
              </div>

              {blogPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {blogPosts.map((post) => (
                          <Card key={post.id}
                                className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group overflow-hidden">
                              <div className="aspect-video relative">
                                  {post.image && (
                                      <Image
                                          src={post.image}
                                          alt={post.title}
                                          fill
                                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                          className="object-cover"
                                      />
                                  )}
                              </div>

                              <CardHeader>
                                  <div className="flex items-center justify-between mb-2">
                                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                                      <div className="flex items-center text-text-muted text-sm"><Calendar
                                          className="w-3 h-3 mr-1"/>{formatDate(post.publishedAt)}</div>
                                  </div>
                                  <CardTitle
                                      className="text-xl text-text-primary group-hover:text-primary transition-smooth line-clamp-2">
                                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                  </CardTitle>
                              </CardHeader>

                              <CardContent>
                                  <p className="text-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>
                                  <div className="flex items-center justify-between">
                                      <div className="flex items-center text-sm text-text-muted"><User
                                          className="w-3 h-3 mr-1"/>{post.author}</div>
                                      <Link href={`/blog/${post.id}`} passHref>
                                          <Button variant="ghost" size="sm" className="group/btn">
                                              Read article
                                              <ArrowRight
                                                  className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform"/>
                                          </Button>
                                      </Link>
                                  </div>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              ) : (
                  <div className="text-center py-16">
                      <p className="text-text-muted text-lg">Articles will be published here soon.</p>
                  </div>
              )}
          </div>
      </section>
  );
};

export default BlogPage;
