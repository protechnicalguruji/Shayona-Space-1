import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, CheckCircle, Target, TrendingUp, Users, ShieldCheck, MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    { question: "How can I book a site visit?", answer: "You can book a site visit by clicking the 'Book Site Visit' button on our homepage or by contacting us directly via phone or WhatsApp." },
    { question: "Is my investment safe?", answer: "Yes, all our listed properties are verified, and we guide you through every step of the documentation process to ensure complete transparency." },
    { question: "What is the expected ROI?", answer: "The ROI varies based on the property location and market trends. Our experts will provide a detailed analysis based on your investment goals." }
  ];
  return (
    <section className="py-20 px-8 bg-[#181818] text-white">
      <div className="max-w-3xl mx-auto bg-white/5 p-10 rounded-[28px] border border-white/10">
        <h2 className="text-5xl font-serif text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  key?: React.Key;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#252525] py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left">
        <span className="text-xl font-medium">{question}</span>
        {isOpen ? <Minus className="text-accent" /> : <Plus className="text-accent" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-gray-400 mt-4">
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export const WhyChooseSection = () => {
    const features = [
        { title: "Verified Properties", icon: <ShieldCheck size={32} /> },
        { title: "Investment Guidance", icon: <Target size={32} /> },
        { title: "Transparent Deals", icon: <CheckCircle size={32} /> },
        { title: "Site Visit Assistance", icon: <MapPin size={32} /> },
        { title: "End-to-End Support", icon: <Users size={32} /> },
        { title: "Best Opportunities", icon: <TrendingUp size={32} /> }
    ];
    return (
        <section className="py-20 px-8 bg-[#EAE9E6]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-serif text-center mb-16 text-[#111]">Why Choose Shayona Space</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-[28px] border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                            <div className="text-accent mb-6">{f.icon}</div>
                            <h3 className="text-xl font-serif font-medium text-text-main">{f.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const InvestmentCalculator = () => {
    const [amount, setAmount] = useState(1000000);
    const [roi, setRoi] = useState(12);
    const [years, setYears] = useState(5);
    const futureValue = amount * Math.pow(1 + roi / 100, years);
    return (
        <section className="py-20 px-8 bg-[#181818] text-white">
            <div className="max-w-4xl mx-auto bg-[#252525] p-12 rounded-[40px]">
                <h2 className="text-4xl font-serif mb-12">Investment Calculator</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <label>Investment Amount: ₹{amount.toLocaleString()}</label>
                        <input type="range" min="100000" max="10000000" step="100000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-accent" />
                        <label>Expected ROI: {roi}%</label>
                        <input type="range" min="5" max="25" value={roi} onChange={(e) => setRoi(Number(e.target.value))} className="w-full accent-accent" />
                        <label>Duration: {years} Years</label>
                        <input type="range" min="1" max="20" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-accent" />
                    </div>
                    <div className="bg-[#252525]/50 p-8 rounded-[28px] border border-white/5 flex flex-col justify-center items-center text-center">
                        <p className="text-gray-400 mb-2">Estimated Future Value</p>
                        <p className="text-4xl font-serif text-accent">₹{Math.round(futureValue).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const CTASection = () => (
    <section className="py-24 bg-[#1F1F1F] text-white text-center px-8">
        <h2 className="text-5xl font-serif mb-6">Ready to Find Your Perfect Investment?</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Let's help you discover the right property in Ahmedabad.</p>
        <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+917016251079" className="px-10 py-5 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-accent transition-all">Call Now</a>
            <a href="https://wa.me/917016251079" className="px-10 py-5 bg-[#25D366] text-white rounded-full font-medium hover:bg-white hover:text-[#25D366] transition-all">WhatsApp Us</a>
            <a href="#contact" className="px-10 py-5 bg-white/10 text-white rounded-full font-medium hover:bg-white hover:text-black transition-all border border-white/20">Book Site Visit</a>
        </div>
    </section>
);

export const Footer = () => (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-[#1F1F1F] text-gray-400 pt-20 pb-10 px-8 border-t border-[#333]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
            <div>
                <h3 className="text-2xl font-serif text-white mb-6">Shayona Space</h3>
                <p className="mb-4">Premium real estate consultancy in Ahmedabad, helping you secure the best investment opportunities.</p>
            </div>
            <div>
                <h4 className="text-white font-medium mb-6">Quick Links</h4>
                <ul className="space-y-3">
                    {['Home', 'Projects', 'Categories', 'Process', 'FAQ', 'Contact'].map(link => <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-accent transition-all">{link}</a></li>)}
                </ul>
            </div>
            <div>
                <h4 className="text-white font-medium mb-6">Services</h4>
                <ul className="space-y-3">
                    {['Residential Plots', 'Weekend Villas', 'Investment Properties', 'New Launch', 'Resale Deals', 'Book Site Visit'].map(link => <li key={link}><a href="#" className="hover:text-accent transition-all">{link}</a></li>)}
                </ul>
            </div>
            <div>
                <h4 className="text-white font-medium mb-6">Contact</h4>
                <ul className="space-y-4">
                    <li className="flex gap-3"><MapPin size={20} /> Ahmedabad</li>
                    <li className="flex gap-3"><a href="tel:+917016251079" className="hover:text-accent">+91 70162 51079</a></li>
                    <li className="flex gap-3"><a href="https://wa.me/917016251079" className="hover:text-accent">WhatsApp</a></li>
                    <li className="flex gap-3"><Clock size={20} /> 9:00 AM - 7:00 PM</li>
                </ul>
            </div>
        </div>
        <div className="text-center pt-10 border-t border-[#333] text-sm">
            © 2026 Shayona Space. All Rights Reserved. | <a href="#" className="hover:text-accent">Privacy Policy</a> | <a href="#" className="hover:text-accent">Terms</a>
            <p className="mt-4">Designed with ❤️ by <a href="#" className="text-white hover:text-accent">Futura Groups</a></p>
        </div>
    </motion.footer>
);
