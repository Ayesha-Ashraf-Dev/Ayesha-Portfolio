import React, { useState, useEffect } from 'react';
import { 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpwork } from '@fortawesome/free-brands-svg-icons';
import { 
  HiOutlineMenu, 
  HiOutlineChevronDown,
  HiOutlineX
} from 'react-icons/hi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileDeepDropdownOpen, setIsMobileDeepDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMainDropdown = () => setIsMainDropdownOpen(!isMainDropdownOpen);
  const toggleDeepDropdown = () => setIsDeepDropdownOpen(!isDeepDropdownOpen);
  const toggleMobileDropdown = () => setIsMobileDropdownOpen(!isMobileDropdownOpen);
  const toggleMobileDeepDropdown = () => setIsMobileDeepDropdownOpen(!isMobileDeepDropdownOpen);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  // Social links with URLs - Desktop (Instagram, LinkedIn, GitHub, Upwork)
  const socialLinks = [
    { icon: faUpwork, label: 'Upwork', url: 'https://www.upwork.com/freelancers/ayeshaa337', type: 'fontawesome' },
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/Ayesha-Ashraf-Dev', type: 'react-icon' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/ayesha-ashraf-243395327/', type: 'react-icon' },
    { icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/_.ayesha_ashraf?igsh=MXUzeHpwa3J6bTd2', type: 'react-icon' }
  ];

  // Mobile Social Links (Twitter, Facebook, Instagram, LinkedIn, GitHub, Upwork)
  const mobileSocialLinks = [
    { icon: faUpwork, label: 'Upwork', url: 'https://www.upwork.com/freelancers/ayeshaa337', type: 'fontawesome' },
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/Ayesha-Ashraf-Dev', type: 'react-icon' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/ayesha-ashraf-243395327/', type: 'react-icon' },
    { icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/_.ayesha_ashraf?igsh=MXUzeHpwa3J6bTd2', type: 'react-icon' }
  ];

  // Helper function to render social icons
  const renderSocialIcon = (social: any, className: string) => {
    if (social.type === 'fontawesome') {
      return <FontAwesomeIcon icon={social.icon} className={className} />;
    } else {
      const IconComponent = social.icon;
      return <IconComponent className={className} />;
    }
  };

  return (
    <header className="header fixed top-0 z-50 w-full px-4 md:px-6 py-3 transition-all duration-300">
      <div className={`
        max-w-6xl mx-auto relative flex items-center justify-between h-16 md:h-[72px]
        transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg rounded-2xl px-4 md:px-6' 
          : 'bg-white/90 backdrop-blur-sm shadow-md rounded-[50px] px-4 md:px-6'
        }
      `}>
        {/* Decorative gradient line */}
        <div className="absolute -bottom-px left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#e87532]/30 to-transparent"></div>
        
        {/* Logo */}
        <a href="index.html" className="logo flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-[#e87532] flex items-center justify-center shadow-lg shadow-[#e87532]/20 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="sitename text-2xl md:text-3xl font-bold text-[#0a0f14]">
            Ayesha
            <span className="text-[#e87532]">.</span>
          </h1>
        </a>

        {/* Navigation Menu - Desktop */}
        <nav id="navmenu" className="navmenu hidden lg:flex items-center">
          <ul className="flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="relative block px-4 py-2 text-sm font-medium text-[#0a0f14] hover:text-[#e87532] transition-all duration-300 rounded-lg hover:bg-[#e87532]/5"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#e87532] transition-all duration-300 group-hover:w-1/2"></span>
                </a>
              </li>
            ))}
            
          
          </ul>
        </nav>

        {/* Right side - Social & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#0a0f14] hover:text-[#e87532] hover:bg-[#e87532]/10 transition-all duration-300 hover:scale-110"
              >
                {renderSocialIcon(social, "h-4 w-4")}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0a0f14] hover:text-[#e87532] hover:bg-[#e87532]/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        lg:hidden fixed inset-x-0 top-[76px] md:top-[84px] bg-white/98 backdrop-blur-md shadow-2xl
        transition-all duration-400 ease-in-out overflow-hidden
        ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-4 rounded-xl text-[#0a0f14] hover:text-[#e87532] hover:bg-[#e87532]/5 transition-all duration-300 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          
            
            {/* Mobile Social Links */}
            <li className="pt-4 mt-2 border-t border-gray-100">
              <div className="flex gap-3 px-4 flex-wrap">
                {mobileSocialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#0a0f14] hover:text-[#e87532] hover:bg-[#e87532]/10 transition-all duration-300"
                  >
                    {renderSocialIcon(social, "h-5 w-5")}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;