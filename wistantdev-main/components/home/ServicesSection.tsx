"use client";

import {cn} from '@/lib/utils';
import {ArrowRight, Code, Globe, Monitor, Palette, Search, Settings, Workflow} from "lucide-react";
import {AppearOnScroll, ScaleTextEffect} from "@/components/ScrollEffects/ScrollEffect";
import GridBackground from "@/components/ui/GridBackground";
import React from "react";

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        'group border-primary/10 bg-background hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className,
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="text-primary mt-4 flex items-center text-sm font-medium">
            <span className="mr-1">Explore service</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="size-6" />,
      title: "WordPress Websites",
      description: "Responsive business websites built and customized with WordPress and Elementor.",
      size: 'large' as const,
    },
    {
      icon: <Palette className="size-6" />,
      title: "Figma to WordPress",
      description: "Figma designs translated into polished WordPress pages with close attention to the original layout.",
      size: 'small' as const,
    },
    {
      icon: <Monitor className="size-6" />,
      title: "Responsive Web Design",
      description: "Mobile- and desktop-friendly layouts designed for clear, consistent experiences across screen sizes.",
      size: 'medium' as const,
    },
    {
      icon: <Settings className="size-6" />,
      title: "WordPress Customization",
      description: "Theme, plugin, and page-section customization to fit a website's content and requirements.",
      size: 'medium' as const,
    },
    {
      icon: <Search className="size-6" />,
      title: "Website Audits & SEO",
      description: "Website reviews, issue identification, and on-page SEO updates such as page titles and meta descriptions.",
      size: 'small' as const,
    },
    {
      icon: <Workflow className="size-6" />,
      title: "API Integration",
      description: "API integration to connect website features with external services.",
      size: 'large' as const,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Grid Background */}
      <GridBackground variant="default" withFade={true} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">my services</p>

          <ScaleTextEffect>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              What I do?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From Figma handoff to WordPress delivery, I create responsive websites and help improve existing pages.
            </p>
          </ScaleTextEffect>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 auto-rows-[minmax(280px,auto)]">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  service.size === 'large'
                    ? 'md:col-span-4'
                    : service.size === 'medium'
                      ? 'md:col-span-3'
                      : 'md:col-span-2',
                  'h-full'
                )}
              >
                <AppearOnScroll>
                  <BentoGridItem
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    size={service.size}
                    className="h-full"
                  />
                </AppearOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
