import { motion } from "motion/react";
import { ArrowRight, MapPin, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode, Key, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl transition-all duration-500">
      <Link to="/" className="text-2xl font-serif font-bold text-text-main z-50">Shayona Space</Link>
      <div className={`fixed inset-0 bg-white/95 flex flex-col items-center justify-center gap-8 text-xl font-medium transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:bg-transparent md:flex-row md:gap-8 md:text-sm md:font-medium md:text-[#111111]`}>
        {["Projects", "Categories", "Process", "Contact"].map((item) => (
          <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-accent transition-all duration-300">
            {item}
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
    className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-black/10 shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500"
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
        <h3 className="text-2xl font-serif font-medium mb-3">{title}</h3>
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
    className="bg-white p-10 rounded-3xl text-center shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col items-center gap-6"
  >
    <div className="p-4 bg-secondary-bg/50 rounded-full">{icon}</div>
    <h4 className="text-lg font-serif font-medium text-text-main">{title}</h4>
  </motion.div>
);

export const ProcessStep = ({ number, title }: { number: string, title: string }) => (
  <div className="flex flex-col items-center text-center gap-6">
    <div className="w-20 h-20 border border-black/10 rounded-full flex items-center justify-center font-serif text-3xl text-text-main">{number}</div>
    <h5 className="font-serif text-xl font-medium text-text-main">{title}</h5>
  </div>
);

export const ContactForm = () => (
  <section id="contact" className="py-32 px-12 my-12 max-w-4xl mx-auto bg-secondary-bg/30 rounded-[40px]">
    <h2 className="text-5xl font-serif text-center mb-16">Get in Touch</h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" className="p-5 rounded-2xl border border-black/5 bg-white focus:outline-none focus:border-accent transition-all" />
      <input type="email" placeholder="Email" className="p-5 rounded-2xl border border-black/5 bg-white focus:outline-none focus:border-accent transition-all" />
      <input type="tel" placeholder="Phone Number" className="p-5 rounded-2xl border border-black/5 bg-white focus:outline-none focus:border-accent col-span-full transition-all" />
      <textarea placeholder="Message" className="p-5 rounded-2xl border border-black/5 bg-white focus:outline-none focus:border-accent col-span-full h-40 transition-all" />
      <button type="submit" className="px-10 py-5 bg-text-main text-white rounded-full font-medium hover:bg-accent transition-all duration-300 col-span-full shadow-lg">Send Message</button>
    </form>
  </section>
);
