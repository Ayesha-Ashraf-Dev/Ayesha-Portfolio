import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const portfolioItems = [
    {
      id: 1,
      category: 'MarketPlace Platform',
      title: 'Arudeal - Full Stack Car Marketplace Platform',
      description: 'A modern automotive marketplace built to connect buyers, sellers, and dealerships through a seamless digital experience.',
      categoryName: 'Full Stack Development',
      image: '/1.png',
      views: 565,
      date: 'May 30, 2025',
      projectUrl: 'https://arudeal.com' 
    },
    {
      id: 2,
      category: 'SAAS',
      title: 'TeamLoom HRMS Platform',
      description: 'A full-stack Human Resource Management System designed to streamline employee operations, including attendance tracking, payroll processing, leave management, and organizational reporting through a centralized admin dashboard.',
      categoryName: 'Enterprise Saas Solution',
      image: '/2.png',
      views: 432,
      date: 'Feb 28, 2019',
      projectUrl: 'https://hrms-client-liard.vercel.app/login'
    },
    {
      id: 3,
      category: 'SAAS',
      title: '1H1N – One Human One Node Network',
      description: 'A decentralized network platform designed to connect individuals and nodes for seamless data sharing and collaboration.',
      categoryName: 'Web Platform Design & Development',
      image: '/1h1n.png',
      views: 789,
      date: 'Mar 5, 2019',
      projectUrl: 'https://1h1n.com'
    },
    {
      id: 4,
      category: 'ZK Data Clouds Platform',
      title: 'Cybersecurity & Privacy Technology',
      description: 'A modern privacy-first cloud platform leveraging zero-knowledge architecture, decentralized infrastructure, and end-to-end encryption to ensure secure, GDPR-compliant data processing and storage.',
      categoryName: 'Branding',
      image: '/4.png',
      views: 321,
      date: 'Feb 15, 2019',
      projectUrl: 'https://zkdataclouds.com'
    },
    {
      id: 5,
      category: 'Landing Pages',
      title: 'Quick Start | Business Landing Page',
      description: 'A business landing page designed to provide a quick and effective online presence for businesses, featuring modern design elements and responsive layout.',
      categoryName: 'Web Design & Development',
      image: '/quick-web.png',
      views: 654,
      date: 'Mar 1, 2019',
      projectUrl: 'https://quick-start-web-clone.vercel.app/'
    },
    {
      id: 6,
      category: 'Landing Pages',
      title: 'Personal Portfolio Website Development',
      description: 'A personal portfolio website showcasing projects, skills, and experience in a visually appealing and user-friendly manner.',
      categoryName: 'Web Design & Development',
      image: '/portfolio-web.png',
      views: 543,
      date: 'Feb 20, 2019',
      projectUrl: 'https://mulan-rafiki-web-clone.vercel.app/'
    }
  ];

  const filters = [
    { id: '*', label: 'All Work' },
    { id: 'MarketPlace Platform', label: 'MarketPlace Platform' },
    { id: 'Landing Pages', label: 'Landing Pages' },
    { id: 'SAAS', label: 'SAAS' },
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Handle project navigation to external URL - FIXED with proper type annotation
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="portfolio" className="portfolio section py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-[0.2em] mb-2 border border-[#e87532]/20 px-4 py-1.5 rounded-full">
            Our Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2943] mt-3 mb-4">
            Portfolio
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
            <div className="w-8 h-1 bg-[#0f2943]/30 rounded-full mx-1.5"></div>
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {/* Portfolio Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-[#e87532] text-white shadow-lg shadow-[#e87532]/25 scale-105' 
                    : 'bg-white text-[#0f2943] hover:bg-[#e87532]/10 hover:text-[#e87532] shadow-sm hover:shadow'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Blog Grid - Exact Template Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="blog-col bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer group"
                onClick={() => handleProjectClick(item.projectUrl)}
              >
                {/* Article Image */}
                <div className="article-img px-2 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105 mt-2" 
                    alt={item.title} 
                    loading="lazy"
                  />
                </div>

                {/* Article Link Button */}
                <div className="article-link px-5 -mt-4 relative z-10 flex justify-center">
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center w-10 h-10 bg-[#e87532] text-white rounded-full shadow-lg shadow-[#e87532]/30 hover:bg-[#0f2943] hover:shadow-lg transition-all duration-300"
                    aria-label={`View ${item.title} project`}
                  >
                    <i className="bi bi-arrow-right text-lg"></i>
                  </a>
                </div>

                {/* Article Text */}
                <div className="article-text px-5 pb-6 pt-3">
                  <h4 
                    className="text-lg font-bold text-[#0f2943] hover:text-[#e87532] transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(item.projectUrl);
                    }}
                  >
                    {item.title}
                  </h4>
                  
                  {/* Article Meta */}
                  <div className="article-meta flex items-center gap-2 mt-2 mb-3 text-sm">
                    <div className="tricks bg-[#e87532]/10 text-[#e87532] text-xs font-semibold px-3 py-1 rounded-full">
                      {item.categoryName}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;