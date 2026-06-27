import { Navbar, PropertyCard, CategoryCard, ProcessStep } from '../components/Components';
import { motion } from 'motion/react';
import { Home, TreeDeciduous, Building, Tag, Phone } from 'lucide-react';
import { properties } from '../data';

export default function Home() {
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
          <h1 className="text-6xl md:text-8xl font-serif font-medium mb-6">Find Your Next <br /> Smart Investment.</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Premium plots, weekend villas and investment opportunities in Ahmedabad.</p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-white hover:text-accent transition-all">Explore Projects</button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white hover:text-text-main transition-all">Book Site Visit</button>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map(property => (
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
            <CategoryCard title="Residential Plots" icon={<Home className="text-accent" />} />
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
    </div>
  );
}
