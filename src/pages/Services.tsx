import { motion } from 'motion/react';
import { Printer, Smartphone, GraduationCap, Copy, MessageCircle, CheckCircle2, ArrowRight, Globe, FileText, UserCheck, CreditCard } from 'lucide-react';

const serviceDetails = [
  {
    id: 'printing',
    title: 'Printing & Banners',
    description: 'Professional printing solutions for all your academic and business needs. We specialize in high-quality documents and large-scale marketing materials.',
    icon: <Printer size={32} />,
    benefits: [
      'Flex Banner & Brochure Printing',
      'Black & White Printing (Naira 20/page)',
      'Full Color Printing (Naira 100/page)',
      'Project & Thesis Binding',
      'Bulk Printing Discounts'
    ],
    cta: 'Start Printing'
  },
  {
    id: 'sim',
    title: 'SIM & National ID',
    description: 'Official registration point for all major Nigerian networks and National ID enrollment. Get your identity and connectivity sorted in one place.',
    icon: <Smartphone size={32} />,
    benefits: [
      'National ID (NIN) Registration',
      'MTN, Airtel, Glo, 9mobile Registration',
      'NIN Linking & Verification',
      'SIM Swap & Replacement',
      'Data Plan Activation'
    ],
    cta: 'Register Now'
  },
  {
    id: 'exams',
    title: 'JAMB & Exam Registration',
    description: 'Authorized registration center for national and international examinations. We ensure your details are captured accurately.',
    icon: <GraduationCap size={32} />,
    benefits: [
      'JAMB UTME/DE Registration',
      'WAEC/NECO/NABTEB Registration',
      'Post-UTME Application Support',
      'Result Checking & Printing',
      'Admission Letter Printing'
    ],
    cta: 'Book Registration'
  },
  {
    id: 'general',
    title: 'Photocopy & Digital Services',
    description: 'General administrative and digital support services to help you navigate online applications and document management.',
    icon: <Globe size={32} />,
    benefits: [
      'High-Speed Photocopying',
      'Document Scanning to Email/USB',
      'Online Job & Visa Applications',
      'CV Writing & Formatting',
      'NIN Enrollment Support'
    ],
    cta: 'Get Digital Help'
  }
];

export default function Services() {
  const whatsappUrl = "https://wa.me/2347035393876?text=Hello,%20I%20want%20to%20use%20your%20service";

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Our Professional <br />
              <span className="text-gray-500 italic">Digital Services.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Fast, accurate, and affordable. We handle the technical details so you can focus on what matters most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:items-center gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image/Icon Side */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gray-100 rounded-[2.5rem] -z-10 group-hover:bg-gray-200 transition-colors duration-500"></div>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] flex items-center justify-center">
                       <div className="text-black scale-[4] opacity-10 absolute">
                        {service.icon}
                       </div>
                       <img 
                        src={`https://picsum.photos/seed/${service.id}/800/600`} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                       />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-3 text-black">
                    <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-black shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg"
                    >
                      <MessageCircle size={20} />
                      {service.cta}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
            <CreditCard size={48} className="mx-auto text-black mb-6 opacity-20" />
            <h2 className="text-3xl font-bold text-black mb-4">Transparent Pricing</h2>
            <p className="text-gray-600 mb-10">
              We offer competitive rates for all our services. While some prices are fixed, others depend on the complexity of the task. Chat with us for a custom quote!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-50 px-6 py-3 rounded-xl border border-gray-100">
                <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Printing</span>
                <span className="font-bold">From ₦20</span>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl border border-gray-100">
                <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Photocopy</span>
                <span className="font-bold">From ₦10</span>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl border border-gray-100">
                <span className="text-xs text-gray-500 uppercase font-bold block mb-1">SIM Reg</span>
                <span className="font-bold">From ₦200</span>
              </div>
              <div className="bg-gray-50 px-6 py-3 rounded-xl border border-gray-100">
                <span className="text-xs text-gray-500 uppercase font-bold block mb-1">Exam Reg</span>
                <span className="font-bold">Call for Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">Need something else?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            If you don't see the service you need, just ask! We handle various digital tasks and online applications.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all"
          >
            <MessageCircle size={24} />
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
