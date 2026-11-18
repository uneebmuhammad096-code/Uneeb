import {Project} from "./projet";
import {SiElementor, SiFigma, SiWordpress} from "react-icons/si";

export const projectsData: Project[] = [
    {
        id: "nyc-limo",
        title: "NYC Limo",
        description: "Figma-based WordPress pages for a limousine service, built with Elementor and adapted for mobile and desktop.",
        category: "web",
        tech: [
            {name: "WordPress", icon: SiWordpress},
            {name: "Elementor", icon: SiElementor},
            {name: "Figma", icon: SiFigma},
        ],
        liveUrl: "https://demo1.webitech.org/nyclimo/",
        status: "live",
        featured: true,
        detailedDescription: {
            overview: "Converted design layouts into responsive WordPress pages using Elementor, following the supplied Figma designs.",
            features: [
                "Implemented Figma-based page layouts",
                "Customized About, Services, and location pages",
                "Created responsive layouts for mobile and desktop",
            ],
        },
    },
    {
        id: "webitech",
        title: "Webitech",
        description: "Website review and audit work focused on identifying issues and improvement opportunities.",
        category: "web",
        tech: [],
        liveUrl: "https://webitech.com/",
        status: "live",
        featured: true,
        detailedDescription: {
            overview: "Reviewed the website, identified issues, and contributed to website improvement tasks.",
            features: [
                "Website audit and issue identification",
                "Website review",
                "Improvement tasks",
            ],
        },
    },
    {
        id: "aura-cloud-hosting",
        title: "Aura - Cloud Hosting",
        description: "Website audits and page reviews covering layout, content, functionality, and potential improvements.",
        category: "web",
        tech: [],
        liveUrl: "https://aurainv.com/",
        status: "live",
        detailedDescription: {
            overview: "Reviewed the Aura Cloud Hosting website and identified issues and improvement areas.",
            features: [
                "Website audit and page reviews",
                "Review of website layout and content",
                "Functionality review and issue identification",
            ],
        },
    },
    {
        id: "wolverhampton-tuition",
        title: "Wolverhampton Tuition",
        description: "On-page SEO updates and audits for educational pages, including page titles and meta descriptions.",
        category: "web",
        tech: [],
        liveUrl: "https://wolverhamptontuition.co.uk/",
        status: "live",
        detailedDescription: {
            overview: "Worked on SEO optimization and website audits for tuition and educational pages.",
            features: [
                "Optimized SEO titles and meta descriptions",
                "Reviewed educational pages",
                "Contributed to website audits",
            ],
        },
    },
];
