import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact section py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#e87532]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0f2943]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container !max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-[0.2em] mb-2 border border-[#e87532]/20 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f2943] mt-3 mb-4">
            Contact
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
            <div className="w-8 h-1 bg-[#0f2943]/30 rounded-full mx-1.5"></div>
            <div className="w-20 h-1 bg-[#e87532] rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life with AI and modern development.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left Content - Enhanced Contact Info */}
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100/50 h-full">
              <div className="content">
                <span className="inline-block text-[#e87532] font-semibold text-sm uppercase tracking-wider mb-3">
                  Let's Connect
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f2943] mb-4 leading-tight">
                  Let's Build Something <br className="hidden sm:block" />
                  <span className="text-[#e87532]">Amazing Together</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you need an MVP, AI integration, or a full-scale platform, I'm here to help you turn your vision into reality.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50/80 rounded-xl hover:bg-[#e87532]/5 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e87532]/10 group-hover:bg-[#e87532] transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e87532] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</div>
                      <a href="mailto:ayesha@optimodes.com" className="text-[#0f2943] font-medium hover:text-[#e87532] transition-colors duration-300">
                        ayesha@optimodes.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50/80 rounded-xl hover:bg-[#e87532]/5 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e87532]/10 group-hover:bg-[#e87532] transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#e87532] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</div>
                      <a href="tel:+923308612116" className="text-[#0f2943] font-medium hover:text-[#e87532] transition-colors duration-300">
                        +92 3308 612116
                      </a>
                    </div>
                  </div>

             

             
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Contact Form */}
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden">
              <div className="p-6 md:p-8 lg:p-10">
                {/* Form Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#0f2943]">Send a Message</h3>
                  <p className="text-gray-500 text-sm">I'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e87532] focus:ring-4 focus:ring-[#e87532]/10 transition-all duration-300 text-[#0f2943] placeholder-gray-400 bg-gray-50/50 hover:bg-gray-50"
                        placeholder="Your Name" 
                        required 
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e87532] focus:ring-4 focus:ring-[#e87532]/10 transition-all duration-300 text-[#0f2943] placeholder-gray-400 bg-gray-50/50 hover:bg-gray-50"
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e87532] focus:ring-4 focus:ring-[#e87532]/10 transition-all duration-300 text-[#0f2943] placeholder-gray-400 bg-gray-50/50 hover:bg-gray-50"
                      placeholder="Subject" 
                      required 
                    />
                  </div>

                  <div className="relative">
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e87532] focus:ring-4 focus:ring-[#e87532]/10 transition-all duration-300 text-[#0f2943] placeholder-gray-400 bg-gray-50/50 hover:bg-gray-50 resize-none"
                      placeholder="Tell me about your project..." 
                      required
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {isLoading && (
                    <div className="flex items-center gap-3 text-[#e87532] bg-[#e87532]/5 p-3 rounded-xl">
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="font-medium">Sending your message...</span>
                    </div>
                  )}
                  
                  {error && (
                    <div className="flex items-center gap-3 text-red-500 bg-red-50 p-3 rounded-xl">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{error}</span>
                    </div>
                  )}
                  
                  {isSent && (
                    <div className="flex items-center gap-3 text-green-500 bg-green-50 p-3 rounded-xl">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Your message has been sent. Thank you!</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="w-full px-6 py-4 bg-[#0f2943] text-white font-semibold rounded-xl hover:bg-[#e87532] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;