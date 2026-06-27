import { motion } from "motion/react";
import { ArrowRight, MapPin, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode, Key, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-3xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl transition-all duration-500">
      <Link to="/" className="text-2xl font-serif font-bold text-text-main z-50">Shayona Space</Link>
      <div className={`fixed inset-0 bg-white/95 flex flex-col items-center justify-center gap-8 text-xl font-medium transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:bg-transparent md:flex-row md:gap-8 md:text-sm md:font-medium md:text-[#111111]`}>
        {["Projects", "Categories", "Process", "Contact"].map((item) => (
          <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="relative hover:text-accent transition-all duration-300 group">
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <button className="hidden md:block px-8 py-3 bg-text-main text-white text-sm rounded-full hover:bg-accent transition-all duration-300">
        Book Site Visit
      </button>
    </nav>
  );
};

export const PropertyCard = ({ id, image, title, location, price }: { key?: Key, id: string, image: string, title: string, location: string, price: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(255,255,255,1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
  >
    <Link to={`/property/${id}`}>
      <div className="h-80 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif font-medium mb-3 text-text-main">{title}</h3>
        <div className="flex items-center text-text-secondary text-sm mb-6">
          <MapPin size={16} className="mr-2" /> {location}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium text-text-main">{price}</p>
          <span className="px-6 py-3 bg-secondary-bg text-text-main text-sm rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300">View Details</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export const CategoryCard = ({ title, icon }: { title: string, icon: ReactNode }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-10 rounded-3xl text-center border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-500 flex flex-col items-center gap-6"
  >
    <div className="p-4 bg-secondary-bg/50 rounded-full">{icon}</div>
    <h4 className="text-lg font-serif font-medium text-text-main">{title}</h4>
  </motion.div>
);

export const ProcessStep = ({ number, title }: { number: string, title: string }) => (
  <div className="flex flex-col items-center text-center gap-6">
    <div className="w-20 h-20 bg-white border border-white/50 shadow-[5px_5px_10px_rgba(0,0,0,0.03),inset_2px_2px_5px_rgba(255,255,255,0.8)] rounded-full flex items-center justify-center font-serif text-3xl text-text-main">{number}</div>
    <h5 className="font-serif text-xl font-medium text-text-main">{title}</h5>
  </div>
);

export const ContactForm = () => (
  <section id="contact" className="py-16 px-12 my-16 max-w-4xl mx-auto bg-[#F6F6F4] rounded-[30px] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
    <h2 className="text-5xl font-serif text-center mb-16 text-text-main">Get in Touch</h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" className="p-5 rounded-xl border border-black/10 bg-[#FDFDFD] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),0_1px_2px_rgba(255,255,255,0.8)] focus:outline-none focus:border-accent transition-all" />
      <input type="email" placeholder="Email" className="p-5 rounded-xl border border-black/10 bg-[#FDFDFD] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),0_1px_2px_rgba(255,255,255,0.8)] focus:outline-none focus:border-accent transition-all" />
      <input type="tel" placeholder="Phone Number" className="p-5 rounded-xl border border-black/10 bg-[#FDFDFD] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),0_1px_2px_rgba(255,255,255,0.8)] focus:outline-none focus:border-accent col-span-full transition-all" />
      <textarea placeholder="Message" className="p-5 rounded-xl border border-black/10 bg-[#FDFDFD] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),0_1px_2px_rgba(255,255,255,0.8)] focus:outline-none focus:border-accent col-span-full h-40 transition-all" />
      <button type="submit" className="px-10 py-5 bg-text-main text-white rounded-xl font-medium hover:bg-accent transition-all duration-300 col-span-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_30px_rgba(196,169,106,0.3)]">Send Message</button>
    </form>
  </section>
);
