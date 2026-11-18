'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What kind of websites do you build?',
    answer:
      'I build responsive WordPress websites with Elementor and create front-end layouts with HTML, CSS, JavaScript, and related tools.',
  },
  {
    question: 'Can you convert a Figma design into WordPress?',
    answer:
      'Yes. I work from Figma designs to build WordPress pages with Elementor, paying close attention to the supplied layout and responsive behavior.',
  },
  {
    question: 'Can you update an existing WordPress website?',
    answer:
      'I can customize themes, plugins, and page sections, and review the site to identify issues and improvement opportunities.',
  },
  {
    question: 'Do you provide website audits and SEO updates?',
    answer:
      'My experience includes website and page audits, reviewing layout, content, and functionality, and updating on-page SEO details such as titles and meta descriptions.',
  },
  {
    question: 'Which tools and technologies do you work with?',
    answer:
      'My toolkit includes WordPress, Elementor, Figma, HTML5, CSS3, JavaScript, jQuery, React.js, Bootstrap, and Tailwind CSS.',
  },
  {
    question: 'Which certifications have you earned?',
    answer:
      'I hold certifications in Full Stack Development from NAVTTC and JavaScript from Pearson.',
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden pb-24">
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl select-none"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl select-none"></div>
      <div className="z-10 container">
        <div className="flex justify-center">
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Faqs</span>
          </div>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]">
          Questions? We&apos;ve got{' '}
          <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text text-transparent dark:bg-gradient-to-b">
            answers
          </span>
        </h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() =>
                selectedIndex === faqIndex
                  ? setSelectedIndex(-1)
                  : setSelectedIndex(faqIndex)
              }
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium">{faq.question}</h3>
                <Plus
                  size={30}
                  className={cn(
                    'text-primary flex-shrink-0 transition duration-300',
                    selectedIndex === faqIndex && 'rotate-45',
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: 'auto',
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-500">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
