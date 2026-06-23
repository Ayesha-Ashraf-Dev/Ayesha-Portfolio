import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume section py-20 bg-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0f2943]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-[0.2em] mb-2 border border-[#e87532]/20 px-4 py-1.5 rounded-full">
            My Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2943] mt-3 mb-4">
            Resume
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

        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#e87532]/10 rounded-xl">
                <svg className="w-6 h-6 text-[#e87532]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f2943]">Work Experience</h2>
            </div>
            <p className="text-gray-500 mb-8 pl-2 border-l-4 border-[#e87532]/30 pl-4">
              Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.
            </p>

            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="group bg-gray-50/80 hover:bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#0f2943]/5 border border-gray-100/50 hover:border-[#e87532]/20">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <div className="inline-block bg-[#e87532]/10 text-[#e87532] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      Jun 2024 - Current
                    </div>
                    <h4 className="text-lg font-bold text-[#0f2943]">Optimodes</h4>
                    <span className="text-sm text-gray-500">Full-time</span>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-[#0f2943] group-hover:text-[#e87532] transition-colors duration-300">
                      Engineering Manager
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Leading a software and AI agency delivering full stack applications, AI agents, and automation systems for clients worldwide. Responsible for end-to-end delivery , architecture, development, client communication, and project ownership
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-[#0f2943]/5 text-[#0f2943] px-3 py-1 rounded-full">Leadership</span>
                      <span className="text-xs bg-[#0f2943]/5 text-[#0f2943] px-3 py-1 rounded-full">Project Management</span>
                      <span className="text-xs bg-[#0f2943]/5 text-[#0f2943] px-3 py-1 rounded-full">Strategy</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="group bg-gray-50/80 hover:bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#0f2943]/5 border border-gray-100/50 hover:border-[#e87532]/20">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <div className="inline-block bg-[#e87532]/10 text-[#e87532] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      Jan 2022 - Current
                    </div>
                    <h4 className="text-lg font-bold text-[#0f2943]">Freelancer & Upwork</h4>
                    <span className="text-sm text-gray-500">Full-time</span>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-[#0f2943] group-hover:text-[#e87532] transition-colors duration-300">
                      Freelance Full Stack Developer
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">

                      Delivered SaaS platforms, e-commerce solutions, AI-powered MVPs, and intelligent chatbots for clients across the globe — working solo or leading small teams from concept through production launch.
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#e87532] mt-1">▸</span>
                        Designed and built AI agents and copilots using LangChain, OpenAI API, and Claude API.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#e87532] mt-1">▸</span>
                        Implemented RAG and knowledge-base systems for client-specific use cases.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#e87532] mt-1">▸</span>
                        Automated business workflows with n8n and Zapier integrations.
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#e87532] mt-1">▸</span>
                        Built full stack web and mobile apps with Next.js, React, React Native, and FastAPI backends.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="group bg-gray-50/80 hover:bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#0f2943]/5 border border-gray-100/50 hover:border-[#e87532]/20">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <div className="inline-block bg-[#e87532]/10 text-[#e87532] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      Jan 2022 - Dec 2022
                    </div>
                    <h4 className="text-lg font-bold text-[#0f2943]">Creative Bird</h4>
                    <span className="text-sm text-gray-500">Full-time</span>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-[#0f2943] group-hover:text-[#e87532] transition-colors duration-300">
                      Frontend Developer
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Built and maintained responsive web interfaces, collaborating with designers to ship pixel-accurate, performant pages.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-[#0f2943]/5 text-[#0f2943] px-3 py-1 rounded-full">Frontend Development</span>
                      <span className="text-xs bg-[#0f2943]/5 text-[#0f2943] px-3 py-1 rounded-full">UI Implementation</span>
                      <span className="text-xs bg-[#0f2943]/5 text-[#0f2943] px-3 py-1 rounded-full">Debugging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#e87532]/10 rounded-xl">
                <svg className="w-6 h-6 text-[#e87532]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f2943]">My Education</h2>
            </div>
            <p className="text-gray-500 mb-8 pl-2 border-l-4 border-[#e87532]/30 pl-4">
              Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing.
            </p>

            <div className="space-y-6">
              {/* Education 1 */}
              <div className="group bg-gray-50/80 hover:bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#0f2943]/5 border border-gray-100/50 hover:border-[#e87532]/20">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <div className="inline-block bg-[#e87532]/10 text-[#e87532] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      2020 - 2024
                    </div>
                    <h4 className="text-lg font-bold text-[#0f2943]">Virtual University</h4>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-[#0f2943] group-hover:text-[#e87532] transition-colors duration-300">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Gained in-depth knowledge of programming fundamentals, algorithms, and software design principles, while applying them to real-world projects in web development, bridging academic theory with practical, industry-relevant skills.
                    </p>

                  </div>
                </div>
              </div>

              {/* Education 2 */}
              <div className="group bg-gray-50/80 hover:bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#0f2943]/5 border border-gray-100/50 hover:border-[#e87532]/20">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <div className="inline-block bg-[#e87532]/10 text-[#e87532] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      jan 2021 - Dec 2021
                    </div>
                    <h4 className="text-lg font-bold text-[#0f2943]">SMIT - Saylani Mass IT Training Center</h4>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-[#0f2943] group-hover:text-[#e87532] transition-colors duration-300">
                      Full Stack Web Development & AI Solutions
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Built and deployed multiple full-stack applications using React, Node.js, and MySQL while learning to integrate AI tools and APIs into real-world products , strengthening skills in clean architecture, responsive design, and end-to-end project delivery.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Download CTA */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#0f2943] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#e87532] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;