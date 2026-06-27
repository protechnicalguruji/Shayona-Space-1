import { Navbar, PropertyCard, CategoryCard, ProcessStep, ContactForm } from '../components/Components';
import { SearchFilters } from '../components/SearchFilters';
import { motion } from 'motion/react';
import { Home as HomeIcon, TreeDeciduous, Building, Tag, Phone, MessageCircle } from 'lucide-react';
import { properties } from '../data';
import { useState } from 'react';

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = (filters: { query: string, type: string }) => {
    let filtered = properties;
    if (filters.query) {
      filtered = filtered.filter(p => p.title.toLowerCase().includes(filters.query.toLowerCase()));
    }
    if (filters.type !== 'All') {
      filtered = filtered.filter(p => p.type === filters.type);
    }
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-6xl md:text-9xl font-serif font-light mb-8 tracking-tighter">Find Your Next <br className="hidden md:block" /> Smart Investment.</h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto px-4 text-gray-200">Premium plots, weekend villas and investment opportunities in Ahmedabad.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center px-4">
            <button className="px-10 py-5 bg-accent text-white rounded-full font-medium text-lg hover:bg-white hover:text-accent transition-all duration-300 shadow-xl">Explore Projects</button>
            <button className="px-10 py-5 bg-white/20 backdrop-blur-md text-white rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-xl border border-white/20">Book Site Visit</button>
          </div>
        </motion.div>
      </section>

      <SearchFilters onFilter={handleFilter} />

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-16 tracking-tight text-text-main">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard 
              key={property.id}
              id={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 px-8 my-10 max-w-7xl mx-auto bg-[#FDFDFD] rounded-[40px] border border-black/5 shadow-sm">
        <h2 className="text-5xl font-serif text-center mb-16">Investment Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CategoryCard title="Residential Plots" icon={<HomeIcon className="text-accent" />} />
            <CategoryCard title="Weekend Villas" icon={<TreeDeciduous className="text-accent" />} />
            <CategoryCard title="New Launch" icon={<Building className="text-accent" />} />
            <CategoryCard title="Resale Deals" icon={<Tag className="text-accent" />} />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-8 my-10 max-w-7xl mx-auto bg-[#FDFDFD] rounded-[40px] border border-black/5 shadow-sm">
        <h2 className="text-5xl font-serif text-center mb-16">Investment Process</h2>
        <div className="relative flex flex-wrap justify-between gap-8">
            <div className="absolute top-10 left-0 w-full h-[1px] bg-black/10 hidden md:block" />
            <ProcessStep number="01" title="Discover" />
            <ProcessStep number="02" title="Consultation" />
            <ProcessStep number="03" title="Property Visit" />
            <ProcessStep number="04" title="Documentation" />
            <ProcessStep number="05" title="Ownership" />
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button className="p-4 bg-[#25D366] text-white rounded-full shadow-lg">
          <MessageCircle size={24} />
        </button>
        <button className="p-4 bg-accent text-white rounded-full shadow-lg">
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
}
