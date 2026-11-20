"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock3, Search, SlidersHorizontal, Star, Plus, Pencil, Archive, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogPosts, type BlogPost } from "@/lib/blogData";

const STORAGE_KEY = "uneeb-blog-posts";
const categories = ["All", "AI", "WordPress", "Web Development", "UI/UX", "JavaScript", "SEO"];

const formatDate = (date: string) => new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function BlogExplorer() {
    const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("latest");
    const [showArchived, setShowArchived] = useState(false);
    const [editorOpen, setEditorOpen] = useState(false);
    const [editing, setEditing] = useState<BlogPost | null>(null);
    const [form, setForm] = useState({
        title: "", excerpt: "", metaDescription: "", category: "AI", image: "", imageAlt: "", content: "", status: "draft" as BlogPost["status"],
    });

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try { setPosts(JSON.parse(saved)); } catch {}
        }
    }, []);

    const persist = (next: BlogPost[]) => {
        setPosts(next);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    };

    const visiblePosts = useMemo(() => {
        const query = search.trim().toLowerCase();
        return posts
            .filter(post => showArchived ? post.status === "archived" : post.status === "published")
            .filter(post => category === "All" || post.category === category)
            .filter(post => !query || `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase().includes(query))
            .sort((a, b) => sort === "oldest"
                ? new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
                : sort === "featured"
                    ? Number(Boolean(b.featured)) - Number(Boolean(a.featured))
                    : new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }, [posts, search, category, sort, showArchived]);

    const featuredPost = visiblePosts.find(post => post.featured) || visiblePosts[0];
    const articlePosts = visiblePosts.filter(post => post.id !== featuredPost?.id);

    const openNew = () => {
        setEditing(null);
        setForm({ title: "", excerpt: "", metaDescription: "", category: "AI", image: "", imageAlt: "", content: "", status: "draft" });
        setEditorOpen(true);
    };

    const openEdit = (post: BlogPost) => {
        setEditing(post);
        setForm({
            title: post.title, excerpt: post.excerpt, metaDescription: post.metaDescription,
            category: post.category, image: post.image, imageAlt: post.imageAlt,
            content: post.content.replace(/<[^>]+>/g, ""), status: post.status,
        });
        setEditorOpen(true);
    };

    const saveArticle = (status: BlogPost["status"]) => {
        if (!form.title.trim() || !form.excerpt.trim()) return;
        const now = new Date().toISOString().slice(0, 10);
        const nextPost: BlogPost = {
            id: editing?.id || Math.max(0, ...posts.map(post => post.id)) + 1,
            slug: editing?.slug || slugify(form.title),
            title: form.title.trim(),
            excerpt: form.excerpt.trim(),
            metaDescription: form.metaDescription.trim() || form.excerpt.trim(),
            content: `<p>${form.content.trim().replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br />")}</p>`,
            category: form.category,
            author: "Muhammad Uneeb",
            publishedAt: editing?.publishedAt || now,
            image: form.image.trim() || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
            imageAlt: form.imageAlt.trim() || `${form.title} featured article`,
            tags: [form.category],
            readingTime: Math.max(1, Math.ceil(form.content.split(/\s+/).length / 220)),
            featured: editing?.featured || false,
            status,
        };
        persist(editing ? posts.map(post => post.id === editing.id ? nextPost : post) : [nextPost, ...posts]);
        setEditorOpen(false);
    };

    const setStatus = (post: BlogPost, status: BlogPost["status"]) => {
        persist(posts.map(item => item.id === post.id ? { ...item, status } : item));
    };

    return (
        <section className="py-16 md:py-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Badge variant="secondary" className="mb-4 px-3 py-1 text-primary">Insights & Ideas</Badge>
                        <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-6xl title3">The Journal</h1>
                        <p className="max-w-2xl text-base text-text-secondary md:text-lg title1">Practical thinking on AI, WordPress, web development, UI/UX, JavaScript and SEO.</p>
                    </div>
                    <Button onClick={openNew} className="w-fit"><Plus className="mr-2 h-4 w-4" />New article</Button>
                </div>

                {featuredPost && (
                    <Link href={`/blog/${featuredPost.slug}`} className="group mb-10 block overflow-hidden rounded-2xl border border-border-light bg-gradient-card shadow-card">
                        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                            <div className="relative min-h-[280px] lg:min-h-[420px]">
                                <Image src={featuredPost.image} alt={featuredPost.imageAlt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur"><Star className="h-3.5 w-3.5 fill-current" />Featured</div>
                            </div>
                            <div className="flex flex-col justify-center p-7 md:p-10">
                                <Badge variant="secondary" className="mb-5 w-fit">{featuredPost.category}</Badge>
                                <h2 className="mb-4 text-3xl font-bold leading-tight text-text-primary transition-colors group-hover:text-primary md:text-4xl">{featuredPost.title}</h2>
                                <p className="mb-6 text-text-secondary">{featuredPost.excerpt}</p>
                                <div className="mb-7 flex flex-wrap items-center gap-4 text-sm text-text-muted"><span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{formatDate(featuredPost.publishedAt)}</span><span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4" />{featuredPost.readingTime} min read</span></div>
                                <span className="flex items-center font-semibold text-primary">Read featured article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                            </div>
                        </div>
                    </Link>
                )}

                <div className="mb-8 flex flex-col gap-4 rounded-xl border border-border-light bg-card p-3 md:flex-row md:items-center">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                        <Input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search articles..." className="pl-10" aria-label="Search articles" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto">
                        {categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm transition-colors ${category === item ? "bg-primary text-primary-foreground" : "text-text-secondary hover:bg-muted"}`}>{item}</button>)}
                    </div>
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4 text-text-muted" />
                        <select value={sort} onChange={event => setSort(event.target.value)} className="h-9 rounded-md border border-input bg-background px-2 text-sm text-text-primary" aria-label="Sort articles">
                            <option value="latest">Latest</option><option value="oldest">Oldest</option><option value="featured">Featured</option>
                        </select>
                        <button onClick={() => setShowArchived(value => !value)} className={`rounded-md border px-3 py-2 text-sm ${showArchived ? "border-primary text-primary" : "border-input text-text-secondary"}`}>{showArchived ? "Archived" : "Manage"}</button>
                    </div>
                </div>

                {articlePosts.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {articlePosts.map(post => (
                            <article key={post.id} className="group overflow-hidden rounded-2xl border border-border-light bg-gradient-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className="relative aspect-[16/10] overflow-hidden"><Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
                                </Link>
                                <div className="p-5 md:p-6">
                                    <div className="mb-4 flex items-center justify-between"><Badge variant="secondary">{post.category}</Badge><span className="flex items-center text-xs text-text-muted"><Clock3 className="mr-1 h-3.5 w-3.5" />{post.readingTime} min</span></div>
                                    <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-snug text-text-primary"><Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-primary">{post.title}</Link></h3>
                                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
                                    <div className="flex items-center justify-between border-t border-border pt-4">
                                        <span className="text-xs text-text-muted">{formatDate(post.publishedAt)}</span>
                                        <div className="flex items-center gap-1">
                                            {showArchived ? <Button variant="ghost" size="sm" onClick={() => setStatus(post, "published")}><Upload className="mr-1 h-3.5 w-3.5" />Restore</Button> : <><Button variant="ghost" size="sm" onClick={() => openEdit(post)} aria-label={`Edit ${post.title}`}><Pencil className="h-3.5 w-3.5" /></Button><Button variant="ghost" size="sm" onClick={() => setStatus(post, "archived")} aria-label={`Archive ${post.title}`}><Archive className="h-3.5 w-3.5" /></Button></>}
                                            <Link href={`/blog/${post.slug}`} className="ml-1 text-primary" aria-label={`Read ${post.title}`}><ArrowRight className="h-4 w-4" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : <div className="rounded-2xl border border-dashed border-border py-16 text-center text-text-muted">{showArchived ? "No archived articles." : "No articles match your search."}</div>}
            </div>

            <Dialog open={editorOpen} onOpenChange={setEditorOpen}>
                <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader><DialogTitle>{editing ? "Edit article" : "Create article"}</DialogTitle><DialogDescription>Add SEO details and publish or save the article as a draft.</DialogDescription></DialogHeader>
                    <div className="grid gap-4 py-2">
                        <Input value={form.title} onChange={event => setForm({ ...form, title: event.target.value })} placeholder="Article title" />
                        <Textarea value={form.excerpt} onChange={event => setForm({ ...form, excerpt: event.target.value })} placeholder="Short excerpt" />
                        <Textarea value={form.metaDescription} onChange={event => setForm({ ...form, metaDescription: event.target.value })} placeholder="SEO meta description" />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <select value={form.category} onChange={event => setForm({ ...form, category: event.target.value })} className="h-9 rounded-md border border-input bg-background px-3 text-sm text-text-primary">
                                {categories.filter(item => item !== "All").map(item => <option key={item}>{item}</option>)}
                            </select>
                            <Input value={form.image} onChange={event => setForm({ ...form, image: event.target.value })} placeholder="Featured image URL" />
                        </div>
                        <Input value={form.imageAlt} onChange={event => setForm({ ...form, imageAlt: event.target.value })} placeholder="Image alt text" />
                        <Textarea value={form.content} onChange={event => setForm({ ...form, content: event.target.value })} placeholder="Article content" className="min-h-36" />
                    </div>
                    <DialogFooter className="gap-2 sm:justify-between">
                        <Button variant="outline" onClick={() => saveArticle("draft")}>Save draft</Button>
                        <Button onClick={() => saveArticle("published")}><Upload className="mr-2 h-4 w-4" />Publish</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
}
