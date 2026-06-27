import { useState } from 'react';
import { Search } from 'lucide-react';

export const SearchFilters = ({ onFilter }: { onFilter: (filters: any) => void }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');

  const handleChange = (newQuery: string, newType: string) => {
    setQuery(newQuery);
    setType(newType);
    onFilter({ query: newQuery, type: newType });
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-secondary-bg flex gap-4 items-center max-w-4xl mx-auto -mt-16 relative z-20">
      <div className="flex-1 flex items-center bg-primary-bg rounded-full px-4 py-3">
        <Search size={20} className="text-text-secondary mr-2" />
        <input 
          placeholder="Search properties..." 
          className="bg-transparent w-full focus:outline-none"
          value={query}
          onChange={(e) => handleChange(e.target.value, type)}
        />
      </div>
      <select 
        className="bg-primary-bg rounded-full px-4 py-3 outline-none"
        value={type}
        onChange={(e) => handleChange(query, e.target.value)}
      >
        <option>All</option>
        <option>Residential Plot</option>
        <option>Weekend Villa</option>
      </select>
    </div>
  );
};
