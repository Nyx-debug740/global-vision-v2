import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Printer, Smartphone, GraduationCap, Copy, Zap, ShieldCheck, Clock, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Printing & Banners',
    description: 'High-quality printing, flex banners, brochures, and color documents.',
    icon: <Printer className="text-black" size={24} />,
    cta: 'Start Printing'
  },
  {
    title: 'SIM & National ID',
    description: 'Fast SIM registration and National ID (NIN) enrollment services.',
    icon: <Smartphone className="text-black" size={24} />,
    cta: 'Register Now'
  },
  {
    title: 'JAMB & Exams',
    description: 'Stress-free registration for JAMB, WAEC, NECO, and other professional exams.',
    icon: <GraduationCap className="text-black" size={24} />,
    cta: 'Book Slot'
  },
  {
    title: 'Photocopying',
    description: 'Quick and clear photocopying and scanning services for all your important documents.',
    icon: <Copy className="text-black" size={24} />,
    cta: 'Get Service'
  }
];

const testimonials = [
  {
    name: 'Chidi Okafor',
    role: 'University Student',
    content: 'Global Vision is my go-to for all my project printing. They are fast and the quality is top-notch!',
    stars: 5
  },
  {
    name: 'Amina Yusuf',
    role: 'Business Owner',
    content: 'I registered my business SIM cards here. The process was smooth and the staff were very professional.',
    stars: 5
  },
  {
    name: 'Tunde Bakare',
    role: 'JAMB Candidate',
    content: 'No delays! I got my JAMB registration done in minutes. Highly recommended for students.',
    stars: 5
  }
];

export default function Home() {
  const whatsappUrl = "https://wa.me/2347035393876?text=Hello,%20I%20want%20to%20use%20your%20service";

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600 mb-6">
                <Zap size={14} className="text-black" />
                Fast & Reliable Digital Services
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-black leading-[0.9] mb-6">
                Get Your Digital <br />
                <span className="text-gray-400 italic">Services Done Fast.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                From high-quality printing to SIM registration and exam bookings, we handle your digital needs with speed and accuracy. No delays, just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <Link
                  to="/services"
                  className="bg-white text-black border-2 border-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                >
                  View Services
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">
                  Trusted by <span className="text-black font-bold">500+ students</span> and businesses
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/printing/800/1000" 
                  alt="Digital Services" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-100 rounded-full -z-10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-black/5 rounded-full -z-10 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section / Stats */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Happy Customers', value: '10,000+' },
              { label: 'Services Offered', value: '15+' },
              { label: 'Success Rate', value: '99%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 tracking-tight">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of digital and administrative services tailored to meet the needs of students and local businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-8 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-black font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {service.cta}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl p-4 aspect-square flex items-center justify-center">
                    <ShieldCheck size={48} className="text-black opacity-20" />
                  </div>
                  <div className="bg-black rounded-2xl p-6 text-white">
                    <h4 className="font-bold text-2xl mb-2">100%</h4>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Accuracy Guaranteed</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-900 rounded-2xl p-6 text-white">
                    <h4 className="font-bold text-2xl mb-2">Fast</h4>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Service Delivery</p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-4 aspect-square flex items-center justify-center">
                    <Clock size={48} className="text-black opacity-20" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-black mb-8 tracking-tight">Why Global Vision?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Lightning Fast Speed', desc: 'We understand your time is valuable. Most services are completed while you wait.', icon: <Zap size={20} /> },
                  { title: 'Affordable Pricing', desc: 'Premium services at student-friendly prices. No hidden charges.', icon: <CheckCircle2 size={20} /> },
                  { title: 'Expert Support', desc: 'Our experienced staff ensures your registrations and documents are error-free.', icon: <ShieldCheck size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-16 tracking-tight">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
            
            {[
              { step: '01', title: 'Visit or Contact', desc: 'Walk into our shop or send us a message on WhatsApp with your request.' },
              { step: '02', title: 'Submit Details', desc: 'Provide the necessary information or documents for your service.' },
              { step: '03', title: 'Get Service', desc: 'Receive your completed service instantly or within the agreed time.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 mt-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 tracking-tight">What Our Clients Say</h2>
            <p className="text-gray-600">Don't just take our word for it. Here's what our community thinks.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} className="fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src={`https://picsum.photos/seed/testi${i}/100/100`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-black">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-black rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Ready to get started? <br />
              <span className="text-gray-500">No more delays.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
              Join hundreds of satisfied customers who trust Global Vision for their digital needs. Chat with us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-2xl"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
              <Link
                to="/services"
                className="bg-transparent text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Our Services
              </Link>
            </div>
            <p className="mt-8 text-gray-500 text-sm font-medium">
              Average response time: <span className="text-white">Under 2 minutes</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
