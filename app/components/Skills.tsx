import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Next.js, React, TypeScript, Python, FastAPI',
      percentage: 90,
      delay: 100,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'AI & LLM Integration',
      description: 'LangChain, OpenAI API, Claude API, RAG Systems',
      percentage: 95,
      delay: 200,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Workflow Automation',
      description: 'n8n, Zapier, custom agent pipelines',
      percentage: 85,
      delay: 300,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Databases & Infrastructure',
      description: 'PostgreSQL, Supabase, MongoDB, Docker',
      percentage: 88,
      delay: 400,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="skills section py-20 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0f2943]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container !max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-[0.2em] mb-2 border border-[#e87532]/20 px-4 py-1.5 rounded-full">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2943] mt-3 mb-4">
            Skills & Technologies
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
            <div className="w-8 h-1 bg-[#0f2943]/30 rounded-full mx-1.5"></div>
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="group"
              data-aos="fade-up" 
              data-aos-delay={skill.delay}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 hover:border-[#e87532]/30 relative overflow-hidden">
                {/* Decorative gradient background */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#e87532]/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e87532]/10 to-[#e87532]/5 flex items-center justify-center text-[#e87532] group-hover:bg-[#e87532] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#e87532]/25">
                    {skill.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0f2943] mb-2 group-hover:text-[#e87532] transition-colors duration-300">
                  {skill.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Proficiency</span>
                    <span className="text-sm font-bold text-[#e87532]">
                      {isVisible ? skill.percentage : 0}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e87532] to-[#f09b6a] rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-[#e87532]/30"
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${skill.delay}ms`
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#e87532] to-transparent transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;