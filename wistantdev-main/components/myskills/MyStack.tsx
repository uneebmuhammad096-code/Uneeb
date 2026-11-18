"use client";

import React from "react";
import {motion} from "framer-motion";
import {professionalSkills, technologies} from "@/lib/skillsdata";

const MyStack = () => {
    return (
        <section id="skills" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{opacity: 0, y: 0}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-2xl md:text-3xl font-bold text-text-primary mb-3 title3"
                    >
                        Skills & Tools
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 0}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        viewport={{once: true}}
                        className="text-text-secondary text-base title1 max-w-2xl mx-auto"
                    >
                        WordPress website creation, Figma-to-WordPress implementation, responsive design, and front-end development.
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon;

                        return (
                            <motion.div
                                key={tech.name}
                                initial={{opacity: 0, y: 16}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.35, delay: index * 0.04}}
                                viewport={{once: true}}
                                whileHover={{scale: 1.06, zIndex: 10, boxShadow: "0 8px 20px rgba(0,0,0,0.25)"}}
                                whileTap={{scale: 0.97}}
                                className="flex flex-col items-center bg-gradient-to-tr from-gray-900 via-gray-850 to-gray-900 border border-border-light rounded-xl shadow-md p-4 w-28 hover:from-primary hover:to-secondary transition-all duration-300"
                            >
                                <div className="bg-background rounded-full p-2 mb-2 flex items-center justify-center w-12 h-12">
                                    <IconComponent size={24} style={{color: tech.color}} title={tech.name}/>
                                </div>
                                <h3 className="text-text-primary font-semibold text-xs text-center">{tech.name}</h3>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-5xl mx-auto">
                    {professionalSkills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full border border-border-light bg-card/60 px-3 py-1.5 text-xs sm:text-sm text-text-secondary"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyStack;
