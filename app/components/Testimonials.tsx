import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false); // Initialize with false for SSR
  const [expandedQuotes, setExpandedQuotes] = useState<{ [key: number]: boolean }>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Set initial value after mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only initialize Swiper on mobile/tablet and after mount
    if (!isMounted) return;
    
    if (!isDesktop && swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        speed: 800,
        effect: 'slide',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        watchOverflow: true,
        grabCursor: true,
        autoHeight: false,
        on: {
          slideChange: () => {
            if (swiperInstance.current) {
              setActiveIndex(swiperInstance.current.realIndex);
            }
          },
        },
      });

      if (swiperInstance.current) {
        swiperInstance.current.update();
        if (swiperInstance.current.autoplay) {
          swiperInstance.current.autoplay.start();
        }
      }

      const handleResize = () => {
        if (swiperInstance.current) {
          swiperInstance.current.update();
        }
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (swiperInstance.current) {
          swiperInstance.current.destroy(true, true);
          swiperInstance.current = null;
        }
      };
    }
  }, [isDesktop, isMounted]);

  const toggleReadMore = (id: number) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const testimonials = [
    {
      id: 1,
      name: 'Elvin Croes',
      role: 'Client',
      quote: 'Ayeesha was fantastic to work with. She delivered high-quality full-stack development work on time and was very responsive throughout the project. Her technical skills, communication, and attention to detail were excellent. I highly recommend her and would gladly work with her again',
      image: 'https://ui-avatars.com/api/?name=Elvin+Croes&background=e87532&color=fff&size=80&font-size=0.5',
      company: 'Arudeal',
      rating: 5,
    },
    {
      id: 2,
      name: 'David Alexandre',
      role: 'Client',
      quote: 'Ayesha delivered clean and polished UI work. She was punctual, efficient, and professional throughout. It was a real pleasure working with her, and I highly recommend her.',
      image: 'https://ui-avatars.com/api/?name=David+Alexandre&background=e87532&color=fff&size=80&font-size=0.5',
      company: '',
      rating: 5,
    },
    {
      id: 3,
      name: 'Andrea Dalla Val',
      role: 'Client',
      quote: "I had the pleasure of working with Ayesha on the 1H1N and ZK Data Clouds projects. Throughout our collaboration, she proved to be highly responsive, proactive, and fully focused on delivering results. She consistently demonstrated reliability, took initiative when challenges arose, and maintained a strong commitment to the project's objectives. Ayesha is also knowledgeable across the all stacks and digital infrastructures, which is something needed when developing highly articulate and complex project. I would highly recommend her to any team looking for a results-driven developer",
      image: 'https://ui-avatars.com/api/?name=Andrea+Dalla+Val&background=e87532&color=fff&size=80&font-size=0.5',
      company: 'ZK Data Clouds',
      rating: 5,
    }
  ];

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const renderTestimonialCard = (testimonial: typeof testimonials[0], index: number) => {
    const isExpanded = expandedQuotes[testimonial.id] || false;
    const shouldTruncate = testimonial.quote.length > 120;
    const displayText = isExpanded ? testimonial.quote : truncateText(testimonial.quote, 120);

    return (
      <div 
        key={testimonial.id} 
        className="testimonial-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-gray-100/80 hover:border-[#e87532]/30 flex flex-col h-full relative overflow-hidden group"
      >
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#e87532]/5 to-transparent rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#e87532]/5 to-transparent rounded-full"></div>
        
        {/* Quote Icon */}
        <div className="absolute top-4 right-6 text-[#e87532]/10 group-hover:text-[#e87532]/20 transition-colors duration-500">
          <svg className="w-10 h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 1.609c-3.636 1.947-4.457 4.175-4.457 6.391h5.462v10.609h-10.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 1.609c-3.636 1.947-4.457 4.175-4.457 6.391h5.462v10.609h-10.983z" />
          </svg>
        </div>

        {/* Profile Section */}
        <div className="flex items-start gap-4 mb-4 relative z-10">
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#e87532] to-[#f09b6a] p-0.5 shadow-md">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-full h-full rounded-full object-cover border-2 border-white"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <h4 className="text-base md:text-lg font-bold text-[#0f2943] group-hover:text-[#e87532] transition-colors duration-300 truncate">
              {testimonial.name}
            </h4>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="text-xs md:text-sm text-gray-500">{testimonial.role}</span>
              {testimonial.company && (
                <>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-xs md:text-sm font-medium text-[#e87532]">{testimonial.company}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4 relative z-10">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? 'text-[#e87532]' : 'text-gray-200'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote Text with Read More */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex-1">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              "{displayText}"
            </p>
          </div>
          
          {shouldTruncate && (
            <button
              onClick={() => toggleReadMore(testimonial.id)}
              className="mt-3 text-[#e87532] font-semibold text-sm md:text-base hover:text-[#d06a2a] transition-colors duration-300 self-start flex items-center gap-1 group/btn"
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <svg className="w-4 h-4 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Read More</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#e87532]/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      </div>
    );
  };

  const renderDesktopLayout = () => {
    return (
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            renderTestimonialCard(testimonial, index)
          ))}
        </div>
      </div>
    );
  };

  const renderMobileLayout = () => {
    return (
      <div className="lg:hidden w-full overflow-hidden">
        {/* Wrapper with padding to prevent shadow clipping */}
        <div className="px-1 md:px-2">
          <div className="testimonial-slider swiper w-full" ref={swiperRef}>
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="swiper-slide h-auto">
                  {renderTestimonialCard(testimonial, index)}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="swiper-pagination flex justify-center gap-2 mt-6"></div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="custom-swiper-button-prev w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-200 hover:border-[#e87532] hover:bg-[#e87532] group transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="custom-swiper-button-next w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-200 hover:border-[#e87532] hover:bg-[#e87532] group transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-110">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Don't render anything during SSR to avoid hydration mismatches
  if (!isMounted) {
    return (
      <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
        <div className="container max-w-7xl mx-auto px-4 overflow-visible">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-[#e87532] rounded-full"></div>
              <span className="text-[#e87532] font-semibold text-xs uppercase tracking-[0.3em]">
                Testimonials
              </span>
              <div className="w-10 h-0.5 bg-[#e87532] rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2943] mb-3 tracking-tight">
              What People <span className="text-[#e87532]">Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              Real feedback from clients and collaborators who have experienced our work
            </p>
          </div>
          {/* Placeholder for SSR */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 min-h-[280px]">
                <div className="animate-pulse bg-gray-200 h-16 w-16 rounded-full mb-4"></div>
                <div className="animate-pulse bg-gray-200 h-6 w-3/4 mb-2"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-1/2 mb-4"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-full mb-2"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-full mb-2"></div>
                <div className="animate-pulse bg-gray-200 h-4 w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
      <div className="container max-w-7xl mx-auto px-4 overflow-visible">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#e87532] rounded-full"></div>
            <span className="text-[#e87532] font-semibold text-xs uppercase tracking-[0.3em]">
              Testimonials
            </span>
            <div className="w-10 h-0.5 bg-[#e87532] rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2943] mb-3 tracking-tight">
            What People <span className="text-[#e87532]">Say</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            Real feedback from clients and collaborators who have experienced our work
          </p>
        </div>

        {/* Testimonials */}
        <div data-aos="fade-up" data-aos-delay="100" className="overflow-visible">
          {renderDesktopLayout()}
          {renderMobileLayout()}
        </div>
      </div>

      <style>{`
        /* Mobile/Tablet Swiper Styles */
        .testimonial-slider {
          width: 100% !important;
          max-width: 100% !important;
          overflow: visible !important;
          padding: 5px 0;
        }
        
        .testimonial-slider .swiper-wrapper {
          align-items: stretch;
          padding: 5px 0;
        }
        
        .testimonial-slider .swiper-slide {
          height: auto !important;
          width: 100% !important;
          max-width: 100% !important;
          flex-shrink: 0 !important;
        }
        
        .testimonial-card {
          height: 100%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Pagination */
        .swiper-pagination {
          position: relative !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px;
          bottom: auto !important;
          height: 12px;
          margin-top: 8px !important;
        }
        
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          margin: 0 !important;
        }
        
        .swiper-pagination-bullet-active {
          width: 28px !important;
          background: #e87532 !important;
          border-radius: 5px !important;
          opacity: 1 !important;
        }
        
        /* Navigation */
        .custom-swiper-button-prev,
        .custom-swiper-button-next {
          position: relative !important;
          top: auto !important;
          left: auto !important;
          right: auto !important;
          margin: 0 !important;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .custom-swiper-button-prev.swiper-button-disabled,
        .custom-swiper-button-next.swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          pointer-events: none;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }

        /* Fix for container not clipping shadows */
        .container {
          max-width: 100%;
          overflow: visible !important;
        }

        /* Prevent horizontal scroll */
        section {
          overflow-x: hidden !important;
        }

        /* Ensure cards don't overflow on small screens */
        @media (max-width: 1023px) {
          .lg\\:grid {
            display: none !important;
          }
          
          .testimonial-card {
            min-height: 250px;
          }
        }

        @media (max-width: 640px) {
          .testimonial-card {
            min-height: 220px;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;