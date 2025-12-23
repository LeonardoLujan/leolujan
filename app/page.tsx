"use client"
import { useEffect, useRef } from 'react';
import Nav from "@/components/nav/nav"
import profile from "@/components/home/profile.jpg"
import Image from 'next/image';

export default function DashboardPage() {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const strings = ["Software Engineer", "Computer Science Student", "SHPE President", "Content Creator"];
    let stringIndex = 0; let charIndex = 0; let isDeleting = false; let typingSpeed = 100;

    function type() {
      if (!typingRef.current) return;
      const currentString = strings[stringIndex];
      if (isDeleting) {
        typingRef.current.textContent = currentString.substring(0, charIndex - 1);
        charIndex--; typingSpeed = 50;
      } else {
        typingRef.current.textContent = currentString.substring(0, charIndex + 1);
        charIndex++; typingSpeed = 100;
      }
      if (!isDeleting && charIndex === currentString.length) {
        typingSpeed = 2000; isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false; stringIndex = (stringIndex + 1) % strings.length; typingSpeed = 500;
      }
      setTimeout(type, typingSpeed);
    }
    type();
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">
      <Nav/>
      
      {/* THE CODE GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        ></div>
      </div>

      {/* CONTENT WRAPPER - Ensure z-index is higher than background */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-8 pt-32 gap-16">
          
          <div className="flex-1 text-left order-2 md:order-1">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
              Leo <br/> Lujan
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-10 h-8">
              I am a <span ref={typingRef} className="text-white font-medium border-r-2 border-white pr-1 animate-pulse"></span>
            </h2>
            <div className="flex gap-4">
              <a href="#about" className="px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-bold text-sm tracking-widest uppercase">
                View Portfolio
              </a>
            </div>
          </div>

          {/* ASYMMETRIC IMAGE BOX */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Decorative "Code" bracket elements */}
              <div className="absolute -top-6 -left-6 text-white/20 text-6xl font-serif">{"{"}</div>
              <div className="absolute -bottom-6 -right-6 text-white/20 text-6xl font-serif">{"}"}</div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-2xl border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                <Image 
                    src={profile} 
                    alt="Leo Lujan" 
                    fill 
                    className="object-cover" 
                    priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCE SECTION - Glassmorphism */}
        <div id="experience" className="max-w-6xl mx-auto py-32 px-8">
            <div className="flex items-center gap-4 mb-16">
                <h3 className="text-sm uppercase tracking-[0.4em] text-white/40">Select Work</h3>
                <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <ExperienceCard 
                    company="Bank of America" 
                    role="Software Engineer Intern" 
                    date="2024"
                    description="Architecting scalable fintech solutions and optimizing database queries."
                />
                <ExperienceCard 
                    company="Johnson & Johnson" 
                    role="Software Engineering Intern" 
                    date="2023"
                    description="Developed internal tools for healthcare data visualization."
                />
                <ExperienceCard 
                    company="SHPE USF" 
                    role="President" 
                    date="Present"
                    description="Leading 200+ members and bridging the gap between students and tech."
                />
            </div>
        </div>
      </div>
    </div>
  )
}

// Small helper component for the Glassmorphism cards
function ExperienceCard({ company, role, date, description }: any) {
    return (
        <div className="group p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] tracking-widest uppercase text-white/30 font-bold">{date}</span>
                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
            </div>
            <h4 className="text-2xl font-bold mb-1">{company}</h4>
            <p className="text-white/60 text-sm mb-6">{role}</p>
            <p className="text-white/40 text-sm leading-relaxed">{description}</p>
        </div>
    )
}