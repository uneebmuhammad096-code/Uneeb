"use client";

import {useState} from "react";

const journeyText = `const journey = [
  {
    period: 'June 2021 - July 2025',
    milestone: 'BS Computer Science',
    institution: 'The Islamia University of Bahawalpur',
    result: 'CGPA 3.43 / 4.00'
  },
  {
    period: 'July 2026 - Present',
    milestone: 'WordPress Developer',
    organization: 'Co Build Ltd'
  },
  {
    certifications: [
      'Full Stack Development - NAVTTC',
      'JavaScript - Pearson'
    ]
  }
];`;

const profileText = `const profile = {
  name: 'Muhammad Uneeb',
  title: 'Creative Web Designer & Developer',
  focus: [
    'WordPress & Elementor',
    'Figma-to-WordPress websites',
    'Responsive, pixel-perfect design'
  ],
  toolkit: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React'],
  approach: ['User experience', 'Website auditing', 'On-page SEO'],
  languages: ['Urdu', 'English']
};`;

function CodeLines({text}: {text: string}) {
  return (
    <pre className="m-0 overflow-x-auto p-4 text-[10px] md:text-xs lg:text-sm leading-relaxed font-mono text-blue-100 h-full">
      <code>{text}</code>
    </pre>
  );
}

export default function AboutCodeBlock() {
  const [copied, setCopied] = useState<"journey" | "profile" | null>(null);

  const handleCopy = async (section: "journey" | "profile") => {
    await navigator.clipboard.writeText(section === "journey" ? journeyText : profileText);
    setCopied(section);
    window.setTimeout(() => setCopied(null), 2000);
  };

  const panels = [
    {key: "journey" as const, filename: "journey.ts", text: journeyText},
    {key: "profile" as const, filename: "profile.ts", text: profileText},
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-2 md:px-0">
      {panels.map((panel) => (
        <div key={panel.key} className="relative rounded-xl p-0.5 h-full">
          <div className="code-border-anim" />
          <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_41%_94%,hsl(var(--primary))_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-4 md:p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] h-full flex flex-col">
            <div className="flex items-center justify-between pb-4">
              <span className="text-sm font-semibold text-white font-mono">{panel.filename}</span>
              <button
                onClick={() => handleCopy(panel.key)}
                className="rounded-full bg-primary/20 border border-primary/50 px-3 py-1 text-[10px] md:text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {copied === panel.key ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="flex-grow overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/5">
              <CodeLines text={panel.text}/>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .code-border-anim {
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          border-radius: 1rem;
          overflow: hidden;
          pointer-events: none;
        }
        .code-border-anim::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 10rem;
          background: linear-gradient(
            0deg,
            hsla(0,0%,100%,0) 0%,
            hsl(var(--primary)) 40%,
            hsl(var(--primary)) 60%,
            hsla(0,0%,40%,0) 100%
          );
          transform: translate(-50%, -50%) rotate(0deg);
          transform-origin: left;
          animation: border-rotate 8s linear infinite;
          z-index: 2;
          pointer-events: none;
        }
        @keyframes border-rotate {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
