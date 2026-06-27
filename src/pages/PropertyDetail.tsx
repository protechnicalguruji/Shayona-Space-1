import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Components';
import { EMICalculator } from '../components/InvestmentTools';
import { properties } from '../data';
import { MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const navigate = useNavigate();

  if (!property) return <div>Property not found</div>;

  return (
    <div className="min-h-screen bg-primary-bg pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <button onClick={() => navigate(-1)} className="flex items-center text-sm mb-8 hover:text-accent">
            <ArrowLeft size={16} className="mr-2" /> Back
            </button>
            <img src={property.image} alt={property.title} className="w-full h-96 object-cover rounded-3xl mb-8" />
            <h1 className="text-5xl font-serif mb-4">{property.title}</h1>
            <div className="flex items-center text-text-secondary mb-6">
            <MapPin size={20} className="mr-2" /> {property.location}
            </div>
            <p className="text-2xl text-accent font-semibold mb-8">{property.price}</p>
            <p className="text-lg text-text-secondary mb-8">{property.description}</p>
            <h3 className="text-2xl font-serif mb-4">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {property.amenities.map(a => (
                <div key={a} className="bg-white p-4 rounded-xl text-center border border-secondary-bg">{a}</div>
            ))}
            </div>
        </div>
        <div className="md:col-span-1">
            <EMICalculator />
        </div>
      </div>
    </div>
  );
}
