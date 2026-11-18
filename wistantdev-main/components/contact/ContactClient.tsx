"use client";

import React, {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Mail, MapPin, Phone, Send} from "lucide-react";
import {AppearOnScroll} from "@/components/ScrollEffects/ScrollEffect";
import GridBackground from "@/components/ui/GridBackground";

const ContactClient = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        );
        window.location.href = `mailto:uneebmuhammad096@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: Mail, title: "Email", value: "uneebmuhammad096@gmail.com", link: "mailto:uneebmuhammad096@gmail.com" },
        { icon: Phone, title: "Phone", value: "0304-0987062", link: "tel:0304-0987062" },
        { icon: MapPin, title: "Location", value: "Thokar Naiz Baig, Lahore", link: null },
    ];

    return (
        <section className="py-20 bg-background min-h-screen relative overflow-hidden">
            {/* Grid Background - Default variant */}
            <GridBackground variant="default" withFade={true} />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">Let's Talk About Your Website</h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Have a WordPress, Figma-to-WordPress, or website improvement project? Share the details and get in touch.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <Card className="bg-gradient-card border-border-light shadow-card">
                        <CardHeader>
                            <CardTitle className="text-2xl text-text-primary">Send a Message</CardTitle>
                            <p className="text-text-secondary">Complete the form to open a message in your email app, where you can review and send it.</p>
                        </CardHeader>
                        <CardContent>
                            <AppearOnScroll>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input name="name" required value={formData.name} onChange={handleChange} placeholder="Your name or company" className="bg-input border-border-light" />
                                        <Input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className="bg-input border-border-light" />
                                    </div>
                                    <Input name="subject" required value={formData.subject} onChange={handleChange} placeholder="Project or message subject" className="bg-input border-border-light" />
                                    <Textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} className="bg-input border-border-light" />
                                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth">
                                        <Send className="mr-2 w-5 h-5" />Open Email App
                                    </Button>
                                </form>
                            </AppearOnScroll>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-6">Contact Details</h2>
                            <p className="text-text-secondary text-lg mb-8">Reach out by email or phone to discuss your website needs.</p>
                        </div>
                        <AppearOnScroll>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index} className="bg-gradient-card border-border-light shadow-card hover:shadow-glow transition-smooth group">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-primary">
                                                    <info.icon className="w-6 h-6 text-primary-foreground" />
                                                </div>
                                                <div>
                                                    <h3 className="text-text-primary font-semibold mb-1">{info.title}</h3>
                                                    {info.link ? <a href={info.link} target={info.link.startsWith("http") ? "_blank" : undefined} rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined} className="text-primary hover:text-primary-glow transition-smooth">{info.value}</a> : <p className="text-text-secondary">{info.value}</p>}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </AppearOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactClient;
