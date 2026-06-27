import { Navbar, PropertyCard, CategoryCard, ProcessStep } from '../components/Components';
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
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-primary-bg px-4"
        >
          <h1 className="text-5xl md:text-8xl font-serif font-medium mb-6">Find Your Next <br className="hidden md:block" /> Smart Investment.</h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto px-4">Premium plots, weekend villas and investment opportunities in Ahmedabad.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center px-4">
            <button className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-accent transition-all">Explore Projects</button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white hover:text-text-main transition-all">Book Site Visit</button>
          </div>
        </motion.div>
      </section>

      <SearchFilters onFilter={handleFilter} />

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-center mb-16">Featured Projects</h2>
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
      <section id="categories" className="py-24 px-8 max-w-7xl mx-auto bg-secondary-bg/30 rounded-3xl">
        <h2 className="text-5xl font-serif text-center mb-16">Investment Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CategoryCard title="Residential Plots" icon={<HomeIcon className="text-accent" />} />
            <CategoryCard title="Weekend Villas" icon={<TreeDeciduous className="text-accent" />} />
            <CategoryCard title="New Launch" icon={<Building className="text-accent" />} />
            <CategoryCard title="Resale Deals" icon={<Tag className="text-accent" />} />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-center mb-16">Investment Process</h2>
        <div className="flex flex-wrap justify-between gap-8">
            <ProcessStep number="01" title="Discover" />
            <ProcessStep number="02" title="Consultation" />
            <ProcessStep number="03" title="Property Visit" />
            <ProcessStep number="04" title="Documentation" />
            <ProcessStep number="05" title="Ownership" />
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-8 bg-text-main text-primary-bg text-center rounded-t-3xl">
          <h2 className="text-5xl font-serif mb-8">Let's Find Your Perfect Property.</h2>
          <div className="flex gap-4 justify-center">
              <button className="flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-accent transition-all">
                  <Phone size={20}/> Call Now
              </button>
          </div>
          <p className="mt-8 text-text-secondary">7016251079 | Ahmedabad</p>
      </section>

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
