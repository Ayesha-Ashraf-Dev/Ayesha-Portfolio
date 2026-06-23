import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faLinkedin, 
  faGithub,
  faUpwork,
  faFreeCodeCamp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      id: 'instagram', 
      icon: faInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/_.ayesha_ashraf?igsh=MXUzeHpwa3J6bTd2' 
    },
    { 
      id: 'linkedin', 
      icon: faLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayesha-ashraf-243395327/' 
    },
    { 
      id: 'github', 
      icon: faGithub,
      label: 'GitHub',
      href: 'https://github.com/Ayesha-Ashraf-Dev' 
    },
    { 
      id: 'upwork', 
      icon: faUpwork,
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/ayeshaashraf' 
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'AI Agents & Copilots', href: '#services' },
    { label: 'LLM Integration', href: '#services' },
    { label: 'RAG Systems', href: '#services' },
    { label: 'Full Stack Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' }
  ];

  return (
    <footer className="footer bg-[#0f2943] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e87532] to-transparent"></div>

      <div className="container !max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Column 1 - Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e87532] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  Optimodes<span className="text-[#e87532]">.</span>
                </span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Building AI-powered solutions and modern web applications for startups and businesses ready to scale.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2 flex-wrap">
                {socialLinks.map((social) => (
                  <a 
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e87532] transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:shadow-lg hover:shadow-[#e87532]/25"
                  >
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#e87532] rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-[#e87532] transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#e87532] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#e87532] rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <a 
                      href={service.href} 
                      className="text-gray-400 hover:text-[#e87532] transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#e87532] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Stay Connected
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#e87532] rounded-full"></span>
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Subscribe to get updates on new projects, AI insights, and development tips.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 pr-14 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e87532] focus:ring-4 focus:ring-[#e87532]/10 transition-all duration-300"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-4 bg-[#e87532] hover:bg-[#d66a2a] rounded-lg text-white transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} <span className="text-[#e87532] font-semibold">Optimodes</span>. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#e87532] transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <a href="#" className="text-gray-400 hover:text-[#e87532] transition-colors duration-300">
              Terms of Service
            </a>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <a href="#" className="text-gray-400 hover:text-[#e87532] transition-colors duration-300">
              Cookies
            </a>
          </div>

          {/* Back to Top Button */}
          <a 
            href="#hero" 
            className="w-10 h-10 rounded-full bg-[#e87532]/20 hover:bg-[#e87532] transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:shadow-lg hover:shadow-[#e87532]/25"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 text-[#e87532] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;