import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq section py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0f2943]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-[0.2em] mb-2 border border-[#e87532]/20 px-4 py-1.5 rounded-full">
            Knowledge Base
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2943] mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
            <div className="w-8 h-1 bg-[#0f2943]/30 rounded-full mx-1.5"></div>
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Find answers to the most common questions about my services, process, and how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="space-y-3">
            {[
              {
                q: "What kind of projects do you take on?",
                a: "I work on full stack web and mobile applications, AI agents, LLM integrations, RAG systems, and workflow automation — from early-stage MVPs to production SaaS platforms."
              },
              {
                q: "Do you work with startups or established businesses?",
                a: "Both. I've delivered projects for early-stage founders building their first MVP and established businesses automating existing operations."
              },
              {
                q: "What's your tech stack?",
                a: "Next.js, React, React Native, TypeScript, Python, FastAPI, LangChain, OpenAI API, Claude API, PostgreSQL, Supabase, MongoDB, Docker, and Tailwind CSS , adapted to what fits each project best."
              },
              {
                q: "Do you work solo or with a team?",
                a: "Through Optimodes, I work solo on smaller projects and lead a team for larger builds , either way, I take full ownership of delivery."
              },
              {
                q: "How do you handle communication and timelines?",
                a: "Clear communication and agile delivery are core to how I work , reflected in a 100% Job Success Score on Upwork. You'll always know where a project stands."
              },
              {
                q: "How can I start a project with you?",
                a: "Reach out through the contact form below, or find me on Upwork , let's talk through your goals and scope the right approach."
              }
            ].map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${
                    isActive ? 'shadow-md ring-1 ring-[#e87532]/20' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                        isActive 
                          ? 'bg-[#e87532] text-white' 
                          : 'bg-[#0f2943]/10 text-[#0f2943] group-hover:bg-[#0f2943]/20'
                      }`}>
                        {index + 1}
                      </span>
                      <h3 className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                        isActive ? 'text-[#e87532]' : 'text-[#0f2943] group-hover:text-[#e87532]'
                      }`}>
                        {item.q}
                      </h3>
                    </div>
                    
                    {/* Animated chevron */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#e87532]/10 text-[#e87532]' 
                        : 'bg-gray-100 text-[#0f2943]/60 group-hover:bg-[#e87532]/10 group-hover:text-[#e87532]'
                    }`}>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? 'rotate-90' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer with smooth animation */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#e87532]/30 to-transparent mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-3">
              Still have questions? I'm here to help.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#0f2943] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#e87532] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;