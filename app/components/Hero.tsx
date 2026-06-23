import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero section bg-white py-20 md:py-28 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="row flex flex-col lg:flex-row items-center gap-12 content">
          <div className="col-lg-6 w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2943] mb-4">
              Building AI-Powered Products That Ship Fast
            </h2>
            <p className="lead text-lg md:text-xl text-[#0a0f14] mb-8 leading-relaxed">

              Full Stack Developer & AI Solutions Builder turning ambitious ideas into production-ready SaaS, e-commerce platforms, and intelligent agents.
            </p>
            <div className="cta-buttons flex flex-wrap gap-4 mb-12" data-aos="fade-up" data-aos-delay="300">
              <a
                href="#portfolio"
                className="btn btn-primary px-8 py-3 bg-[#e87532] text-white font-semibold rounded-full hover:opacity-80 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline px-8 py-3 border-2 border-[#e87532] text-[#e87532] font-semibold rounded-full hover:bg-[#e87532] hover:text-white transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>
            <div className="hero-stats flex gap-8" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item text-center">
                <span className="stat-number block text-2xl md:text-3xl font-bold text-[#e87532]">5+</span>
                <span className="stat-label text-sm text-[#0a0f14]">Years Experience</span>
              </div>
              <div className="stat-item text-center">
                <span className="stat-number block text-2xl md:text-3xl font-bold text-[#e87532]">100+</span>
                <span className="stat-label text-sm text-[#0a0f14]">Projects Completed</span>
              </div>
              <div className="stat-item text-center">
                <span className="stat-number block text-2xl md:text-3xl font-bold text-[#e87532]">50+</span>
                <span className="stat-label text-sm text-[#0a0f14]">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 w-full lg:w-1/2 relative flex justify-center">
            <div className="hero-image relative">
              {/* Shape 1 - Top Right */}
              <div className="shape-1 absolute -top-5 -right-5 w-[300px] h-[300px] rounded-full bg-[#e87532]/15 animate-morph-shape z-0"></div>

              {/* Shape 2 - Bottom Left */}
              <div className="shape-2 absolute -bottom-5 -left-5 w-[200px] h-[200px] rounded-full bg-[#0f2943]/10 animate-morph-shape-reverse z-0"></div>

              <img
                src="/3.png"
                alt="Portfolio Hero Image"
                className="img-fluid w-full max-w-md relative z-10"
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;