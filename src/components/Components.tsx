import { motion } from "motion/react";
import { ArrowRight, MapPin, CheckCircle, Phone, Mail, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode, Key } from "react";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent">
    <Link to="/" className="text-2xl font-serif font-bold text-text-main">Shayona Space</Link>
    <div className="flex gap-8 text-sm font-medium text-text-secondary">
      {["Projects", "Categories", "Process", "Contact"].map((item) => (
        <a key={item} href={`/#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
          {item}
        </a>
      ))}
    </div>
    <button className="px-6 py-2 bg-text-main text-primary-bg text-sm rounded-full hover:bg-accent transition-all">
      Book Site Visit
    </button>
  </nav>
);

export const PropertyCard = ({ id, image, title, location, price }: { key?: Key, id: string, image: string, title: string, location: string, price: string }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-secondary-bg"
  >
    <Link to={`/property/${id}`}>
      <div className="h-64 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        <div className="flex items-center text-text-secondary text-sm mb-4">
          <MapPin size={16} className="mr-1" /> {location}
        </div>
        <p className="text-accent font-semibold mb-4">{price}</p>
        <div className="flex items-center text-sm font-semibold hover:text-accent transition-colors">
          View Details <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export const CategoryCard = ({ title, icon }: { title: string, icon: ReactNode }) => (
  <motion.div 
    whileHover={{ backgroundColor: "#ECE4D8" }}
    className="bg-white p-8 rounded-3xl text-center border border-secondary-bg flex flex-col items-center gap-4 transition-all"
  >
    {icon}
    <h4 className="text-lg font-serif font-bold">{title}</h4>
  </motion.div>
);

export const ProcessStep = ({ number, title }: { number: string, title: string }) => (
  <div className="flex flex-col items-center text-center gap-4">
    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">{number}</div>
    <h5 className="font-serif font-bold">{title}</h5>
  </div>
);
