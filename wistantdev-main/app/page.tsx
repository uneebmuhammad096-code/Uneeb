import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutMe from "@/components/home/AboutMe";
import MyExperience from "@/components/MyExperience";
import MyStack from "@/components/myskills/MyStack";
import FaqSection from "@/components/faq/FaqSection";
import {siteUrl} from "@/lib/siteConfig";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Uneeb",
  url: siteUrl,
  jobTitle: "Creative Web Designer & Developer",
  description: "Creative web designer and WordPress developer who builds responsive Elementor websites from Figma designs and improves on-page SEO.",
  knowsAbout: [
    "WordPress",
    "Elementor",
    "Figma-to-WordPress development",
    "Responsive web design",
    "Website audits",
    "On-page SEO",
  ],
  sameAs: ["https://www.linkedin.com/in/muhammad-uneeb-4563a3388"],
};

export default function HomePage() {
  return (
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema).replace(/</g, "\\u003c")}}
      />
      <HeroSection/>
      <AboutMe/>
      <ServicesSection/>
      <MyStack />
      <MyExperience/>
 
      <FaqSection />
      </>
  );
}
