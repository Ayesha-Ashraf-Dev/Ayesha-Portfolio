import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="about section w-full py-20 bg-gray-50 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0f2943]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container !max-w-6xl mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-[0.2em] mb-2 border border-[#e87532]/20 px-4 py-1.5 rounded-full">
                        Get to know me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0f2943] mt-3 mb-4">
                        About Me
                    </h2>
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
                        <div className="w-8 h-1 bg-[#0f2943]/30 rounded-full mx-1.5"></div>
                        <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
                        I'm a Full Stack Developer & AI Solutions Builder with a passion for turning ambitious ideas into production-ready products fast. From SaaS platforms and e-commerce solutions to AI agents, LLM integrations, and workflow automations, I thrive on solving real-world problems with clean, scalable, and maintainable code.

                        Through Optimodes, I've helped clients across the globe go from rough concept to live product on time, on budget, every single time.

                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Image Section - enhanced with modern frame */}
                    <div className="lg:w-5/12" data-aos="fade-right" data-aos-delay="200">
                        <div className="relative">
                            {/* Decorative rings */}
                            <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-[#e87532]/20 rounded-full"></div>
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-[#0f2943]/10 rounded-full"></div>

                            {/* Image with modern styling */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#e87532]/10">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2943]/20 to-transparent z-10"></div>
                                <img
                                    src="/avatar.png"
                                    alt="Profile"
                                    className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
                                />
                                {/* Floating badge */}
                                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                                    <span className="text-[#0f2943] font-medium text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Available
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section - refined typography & spacing */}
                    <div className="lg:w-7/12" data-aos="fade-left" data-aos-delay="300">
                        <div className="space-y-5">
                            <div>
                                <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-widest mb-2">
                                    Full Stack Developer & AI Solutions Builder
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0f2943] leading-tight">

                                    Building digital products
                                    <br className="hidden sm:block" />
                                    that <span className="text-[#e87532]">solve real problems</span>
                                </h2>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-base">

                                With 5+ years of freelance experience and a 100% Job Success Score on Upwork, I've built a reputation for clear communication, agile delivery, and treating every client's goal as my own. Whether working solo or leading a team, I bring full ownership to every project I touch.
                            </p>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
                                {[
                                    { label: 'Name', value: 'Ayesha' },
                                    { label: 'Phone', value: '+92 3308612116' },
                                    { label: 'Age', value: '24' },
                                    { label: 'Email', value: 'devayeshaashraf@gmail.com' },
                                    { label: 'Occupation', value: 'Full Stack Developer & AI Solutions Builder' }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-baseline gap-2 py-1.5 border-b border-gray-100/80 ${item.label === 'Occupation' ? 'col-span-2' : ''
                                            }`}
                                    >
                                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider min-w-[72px]">
                                            {item.label}
                                        </span>
                                        <span className="text-[#0f2943] font-medium text-sm break-words">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Signature + CTA */}
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200/70">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-[#e87532]/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#e87532]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[#0f2943] font-bold text-base">Ayesha Ashraf</h4>
                                        <p className="text-gray-400 text-xs">Full Stack Developer</p>
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 bg-[#0f2943] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#e87532] transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Let's talk
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;