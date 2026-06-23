import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);

  useEffect(() => {
    // Initialize Swiper
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        watchOverflow: true,
        grabCursor: true,
        // Set width explicitly
        width: swiperRef.current.parentElement?.clientWidth || undefined,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
          }
        }
      });

      // Force update after initialization
      if (swiperInstance.current) {
        swiperInstance.current.update();
        if (swiperInstance.current.autoplay) {
          swiperInstance.current.autoplay.start();
        }
      }

      // Handle window resize
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
        }
      };
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Elvin Croes',
      role: 'Client',
      quote: 'Ayeesha was fantastic to work with. She delivered high-quality full-stack development work on time and was very responsive throughout the project. Her technical skills, communication, and attention to detail were excellent. I highly recommend her and would gladly work with her again'
    },
    {
      id: 2,
      name: 'David Alexandre',
      role: 'Client',
      quote: 'Ayesha delivered clean and polished UI work. She was punctual, efficient, and professional throughout. It was a real pleasure working with her, and I highly recommend her.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section py-12 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Title - Compact */}
        <div className="text-center mb-8">
          <span className="inline-block text-[#e87532] font-semibold text-[10px] uppercase tracking-[0.2em] mb-1 border border-[#e87532]/20 px-3 py-0.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2943] mt-1">
            What People Say
          </h2>
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-12 h-0.5 bg-[#e87532] rounded-full"></div>
            <div className="w-4 h-0.5 bg-[#0f2943]/20 rounded-full"></div>
            <div className="w-12 h-0.5 bg-[#e87532] rounded-full"></div>
          </div>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          {/* Swiper Container - Keep overflow hidden but ensure proper width */}
          <div 
            className="testimonials-slider overflow-hidden" 
            ref={swiperRef}
            style={{ width: '100%' }}
          >
            <div className="swiper-wrapper" style={{ width: '100%' }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide" style={{ height: 'auto' }}>
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100 h-full">
                    {/* Stars - Small */}
                    <div className="flex items-center gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-[#e87532]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote - Small text */}
                    <p className="text-gray-700 text-md leading-relaxed mb-3 line-clamp-3 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Profile - Compact */}
                    <div className="flex items-center gap-2.5 pt-2.5 border-t border-gray-100">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#0f2943] truncate">
                          {testimonial.name}
                        </h3>
                        <span className="text-xs text-[#e87532] font-medium">
                          {testimonial.role}
                        </span>
                      </div>
                      {/* Small quote icon */}
                      <svg className="w-4 h-4 text-[#e87532]/20 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 1.609c-3.636 1.947-4.457 4.175-4.457 6.391h5.462v10.609h-10.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 1.609c-3.636 1.947-4.457 4.175-4.457 6.391h5.462v10.609h-10.983z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination/Dots - Minimal */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-0.5 bg-[#e87532] rounded-full"></div>
            <div className="w-3 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-0.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Add custom CSS to ensure Swiper works on mobile */}
      <style>{`
        .testimonials-slider {
          width: 100% !important;
          overflow: hidden !important;
        }
        .testimonials-slider .swiper-wrapper {
          width: 100% !important;
          align-items: stretch;
        }
        .testimonials-slider .swiper-slide {
          height: auto !important;
          width: 100% !important;
          flex-shrink: 0 !important;
        }
        /* Mobile specific fixes */
        @media (max-width: 639px) {
          .testimonials-slider .swiper-slide {
            width: 100% !important;
            flex-shrink: 0 !important;
          }
          .testimonials-slider .swiper-slide:not(.swiper-slide-active) {
            opacity: 0.5;
          }
        }
        /* Ensure proper width on desktop */
        @media (min-width: 640px) {
          .testimonials-slider .swiper-slide {
            width: 50% !important;
            flex-shrink: 0 !important;
          }
        }
        @media (min-width: 1024px) {
          .testimonials-slider .swiper-slide {
            width: 50% !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;