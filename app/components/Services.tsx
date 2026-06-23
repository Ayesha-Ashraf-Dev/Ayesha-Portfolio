import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI Agents & Copilots',
      description: 'Custom AI agents that handle support, research, or internal operations — built on LangChain, OpenAI, and Claude.',
      delay: 200
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'LLM Integration',
      description: 'Embed OpenAI or Claude into your existing product with clean, production-ready architecture.',
      delay: 300
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'RAG & Knowledge Base Systems',
      description: 'Give your AI tools accurate, up-to-date answers grounded in your own documents and data.',
      delay: 400
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Full Stack Web & Mobile Apps',
      description: 'End-to-end builds with Next.js, React, React Native, TypeScript, and Python/FastAPI.',
      delay: 500
    }
  ];

  return (
    <section id="services" className="services section py-20 bg-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0f2943]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container !max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-[0.2em] mb-2 border border-[#e87532]/20 px-4 py-1.5 rounded-full">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2943] mt-3 mb-4">
            Services
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
            <div className="w-8 h-1 bg-[#0f2943]/30 rounded-full mx-1.5"></div>
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Full stack development and AI integration services for startups and businesses ready to ship.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16" data-aos="fade-up" data-aos-delay="100">
          {/* Left Content - Enhanced with visual appeal */}
          <div className="lg:w-1/3 lg:sticky lg:top-20">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[#e87532]/20 rounded-full"></div>
              
              <div className="relative">
                <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-wider mb-3">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f2943] mb-4 leading-tight">
                  Building the Future <br className="hidden sm:block" />
                  <span className="text-[#e87532]">with AI & Modern</span> Development
                </h2>
                <div className="w-16 h-1 bg-[#e87532] rounded-full mb-4"></div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I help startups and businesses leverage cutting-edge AI technologies and modern web development frameworks to build scalable, intelligent applications that drive real business value.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-[#0f2943]">
                    <span className="w-1.5 h-1.5 bg-[#e87532] rounded-full"></span>
                    5+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0f2943]">
                    <span className="w-1.5 h-1.5 bg-[#e87532] rounded-full"></span>
                    100+ Projects
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0f2943]">
                    <span className="w-1.5 h-1.5 bg-[#e87532] rounded-full"></span>
                    50+ Happy Clients
                  </div>
                </div>
                <a 
                  href="#" 
                  className="group inline-flex items-center gap-3 bg-[#0f2943] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#e87532] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  See all services
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Service Cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="group bg-gray-50/80 hover:bg-white p-8 rounded-2xl border border-gray-100/50 hover:border-[#e87532]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0f2943]/5 hover:-translate-y-2"
                  data-aos="fade-up" 
                  data-aos-delay={service.delay}
                >
                  {/* Icon with gradient background */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#e87532]/10 group-hover:bg-[#e87532] transition-all duration-300 flex items-center justify-center text-[#e87532] group-hover:text-white">
                      {service.icon}
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#e87532]/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f2943] mb-3 group-hover:text-[#e87532] transition-colors duration-300">
                    <a href="service-details.html" className="hover:text-[#e87532] transition-colors duration-300">
                      {service.title}
                    </a>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  {/* <div className="mt-4 pt-4 border-t border-gray-100/50">
                    <a 
                      href="service-details.html" 
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#0f2943] group-hover:text-[#e87532] transition-colors duration-300"
                    >
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;