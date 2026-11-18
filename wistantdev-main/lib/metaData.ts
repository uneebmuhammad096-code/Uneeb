import {Metadata} from "next";
import {siteUrl} from "@/lib/siteConfig";

const socialImage = {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Muhammad Uneeb - Creative Web Designer and Developer",
};

function createPageMetadata(title: string, description: string, path: string): Metadata {
    const fullTitle = `${title} | Muhammad Uneeb`;

    return {
        title,
        description,
        alternates: {canonical: path},
        openGraph: {
            type: "website",
            title: fullTitle,
            description,
            url: `${siteUrl}${path}`,
            images: [socialImage],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [socialImage.url],
        },
    };
}

export const Metacontact = createPageMetadata(
    "Contact",
    "Contact Muhammad Uneeb about WordPress website development, Figma-to-WordPress projects, website audits, and on-page SEO.",
    "/contact",
);

export const MetaProjects = createPageMetadata(
    "WordPress Website Projects",
    "Explore Muhammad Uneeb's live website projects, including responsive Elementor builds, Figma-to-WordPress development, website audits, and on-page SEO.",
    "/projects",
);

export const MetaServices = createPageMetadata(
    "WordPress & Web Design Services",
    "WordPress website development, Figma-to-WordPress conversion, responsive web design, theme customization, website audits, and on-page SEO.",
    "/services",
);

