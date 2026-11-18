"use client";

import {Award, Briefcase, GraduationCap, Languages} from "lucide-react";
import {AppearOnScroll} from "@/components/ScrollEffects/ScrollEffect";

interface TimelineItemData {
    title: string;
    institution: string;
    date: string;
    description: string;
}

const professionalExperiences: TimelineItemData[] = [
    {
        title: "WordPress Developer",
        institution: "Co Build Ltd",
        date: "July 2026 - Present",
        description: "Build and customize WordPress websites with Elementor, translate Figma designs into responsive pages, and contribute to website audits and on-page SEO.",
    },
];

const academicBackground: TimelineItemData[] = [
    {
        title: "BS Computer Science (BSCS)",
        institution: "The Islamia University of Bahawalpur",
        date: "June 2021 - July 2025",
        description: "Graduated with a CGPA of 3.43 / 4.00.",
    },
];

const certifications = [
    {name: "Full Stack Development", issuer: "NAVTTC"},
    {name: "JavaScript", issuer: "Pearson"},
];

function TimelineItem({item, isLast}: {item: TimelineItemData; isLast: boolean}) {
    return (
        <div className="relative pl-10 group">
            <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background transition-transform group-hover:scale-125"/>
            {!isLast && <div className="absolute left-[7px] top-5 h-full w-px bg-border"/>}
            <div className="mb-10 transition-transform group-hover:translate-x-1">
                <p className="text-primary font-medium mb-1 text-sm">{item.date}</p>
                <h4 className="font-semibold text-text-primary mb-1 title3">{item.title}</h4>
                <p className="text-text-secondary font-medium mb-2 text-sm">{item.institution}</p>
                <p className="text-text-secondary title1 text-sm">{item.description}</p>
            </div>
        </div>
    );
}

export default function MyExperience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <AppearOnScroll>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">
                            Experience & Education
                        </h2>
                    </AppearOnScroll>
                    <AppearOnScroll>
                        <p className="text-text-secondary text-lg title1 max-w-3xl mx-auto">
                            My professional experience, computer science education, and industry certifications.
                        </p>
                    </AppearOnScroll>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
                    <div>
                        <AppearOnScroll>
                            <div className="flex items-center gap-4 mb-8">
                                <Briefcase className="w-8 h-8 text-primary"/>
                                <h3 className="text-2xl font-bold text-text-primary">Experience</h3>
                            </div>
                        </AppearOnScroll>
                        {professionalExperiences.map((item) => (
                            <AppearOnScroll key={item.title}>
                                <TimelineItem item={item} isLast/>
                            </AppearOnScroll>
                        ))}
                    </div>

                    <div>
                        <AppearOnScroll>
                            <div className="flex items-center gap-4 mb-8">
                                <GraduationCap className="w-8 h-8 text-primary"/>
                                <h3 className="text-2xl font-bold text-text-primary">Education</h3>
                            </div>
                        </AppearOnScroll>
                        {academicBackground.map((item) => (
                            <AppearOnScroll key={item.title}>
                                <TimelineItem item={item} isLast/>
                            </AppearOnScroll>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 mt-4">
                    <AppearOnScroll>
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <Award className="w-6 h-6 text-primary"/>
                                <h3 className="text-xl font-bold text-text-primary">Certifications</h3>
                            </div>
                            <ul className="space-y-3">
                                {certifications.map((certification) => (
                                    <li key={certification.name} className="rounded-xl border border-border-light bg-gradient-card p-4">
                                        <p className="font-semibold text-text-primary">{certification.name}</p>
                                        <p className="text-sm text-text-secondary">{certification.issuer}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AppearOnScroll>
                    <AppearOnScroll>
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <Languages className="w-6 h-6 text-primary"/>
                                <h3 className="text-xl font-bold text-text-primary">Languages</h3>
                            </div>
                            <p className="text-text-secondary rounded-xl border border-border-light bg-gradient-card p-4">
                                Urdu · English
                            </p>
                        </div>
                    </AppearOnScroll>
                </div>
            </div>
        </section>
    );
}
