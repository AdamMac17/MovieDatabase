'use client'
import React, {useState, useEffect} from 'react';
import Moviecard from './moviecard';
import TagFilter from './TagFilter';
import { X, Filter, Search } from 'lucide-react';

// Centralized tag definitions with colors
const TAG_DEFINITIONS = {
  // Genres
  'horror': { color: 'bg-red-700', category: 'genre' },
  'comedy': { color: 'bg-yellow-400', category: 'genre' },
  'action': { color: 'bg-amber-600', category: 'genre' },
  'drama': { color: 'bg-indigo-700', category: 'genre' },
  'sci-fi': { color: 'bg-lime-400', category: 'genre' },
  'thriller': { color: 'bg-orange-500', category: 'genre' },
  'romance': { color: 'bg-rose-300', category: 'genre' },
  'fantasy': { color: 'bg-purple-400', category: 'genre' },
  'adventure': { color: 'bg-lime-700', category: 'genre'},
  
  // Themes/Moods
  'weird premise': { color: 'bg-teal-300', category: 'theme' },
  'cult classic': { color: 'bg-emerald-600', category: 'theme' },
  'dark': { color: 'bg-slate-700', category: 'theme' },
  'lighthearted': { color: 'bg-sky-200', category: 'theme' },
  'ironic' : {color: 'bg-fuchsia-500', category: 'theme'},
  
  
  // Eras
  '80s': { color: 'bg-cyan-400', category: 'era' },
  '90s': { color: 'bg-pink-500', category: 'era' },
  '2000s': { color: 'bg-green-600', category: 'era' },
  'modern': { color: 'bg-blue-600', category: 'era' },
  'classic': { color: 'bg-stone-600', category: 'era' },
  
  // Quality/Status
  'hidden gem': { color: 'bg-amber-300', category: 'status' },
  'mainstream': { color: 'bg-stone-400', category: 'status' },
  'so bad its good': { color: 'bg-red-400', category: 'status' },
  'just plain bad' : { color: 'bg-red-900', category: 'status'},
  'painfully bad' : { color: 'bg-red-950', category: 'status'}
};


    
const MovieList = () => {

        const [selectedTags, setSelectedTags] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
      
          const movies = [
            {
              id: 1,
              title: 'Evil Bong',
              imageUrl: '/evilbongmedium.jpg',
              tags: ['horror', 'comedy', 'weird premise', '2000s', 'so bad its good']
            },
            {
              id: 2,
              title: 'Killer Sofa',
              imageUrl: '/killersofa.jpg',
              tags: ['horror', 'comedy', 'fantasy', 'thriller', 'weird premise', 'modern']
            },
            {
              id: 3,
              title: "Willy's Wonderland",
              imageUrl: '/willyswonderland.jpg',
              tags: ['horror', 'action', 'comedy', 'modern', 'so bad its good', 'hidden gem']
            },
            {
              id: 4,
              title: 'The Banana Splits Movie',
              imageUrl: '/bananasplits.jpg',
              tags: ['horror', 'comedy', 'thriller', 'dark', 'modern']
            },
            {
              id: 5,
              title: 'Joe Dirt',
              imageUrl: '/joedirt.jpg',
              tags: ['comedy', 'adventure', '2000s', 'so bad its good', 'hidden gem', 'cult classic']
            },
            {
              id: 6,
              title: 'Alpha and Omega',
              imageUrl: '/alphaomega.jpg',
              tags: ['adventure', 'comedy', 'romance', '2000s', 'so bad its good']
            },
            {
              id: 7,
              title: 'The Wolf of Wall Street',
              imageUrl: '/wallstreet.jpg',
              tags: ['drama', 'dark', 'comedy', 'just plain bad', 'painfully bad', '2000s', 'ironic']
            },
            {
              id: 8,
              title: "Wayne's World",
              imageUrl: '/waynesworld.jpg',
              tags: ['comedy', 'cult classic', '90s', 'ironic', 'lighthearted']
            }
          ];

          // Get all unique tags from movies
          const allTags = [...new Set(movies.flatMap(movie => movie.tags))];
          console.log(allTags)
          // Filter movies based on selected tags and search term
        const filteredMovies = movies.filter(movie => {
        const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => 
        movie.tags.some(movieTag => movieTag.toLowerCase() === tag.toLowerCase())
        );
        const matchesSearch = searchTerm === '' || 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
        return matchesTags && matchesSearch;
        });

        const handleTagToggle = (tag) => {
          setSelectedTags(prev => 
            prev.includes(tag) 
              ? prev.filter(t => t !== tag)
              : [...prev, tag]
          );
        };

        const handleTagClick = (tag) => {
          if (!selectedTags.includes(tag)) {
            setSelectedTags(prev => [...prev, tag]);
          }
        };
      
        const clearFilters = () => {
          setSelectedTags([]);
          setSearchTerm('');
        };
      
    return(
      <div className="min-h-screen flex flex-col">
          <main className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Give Me A Bad Movie</h1>
        
        {/* Search Bar */}
        <div className="relative mb-6 max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search movies or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Tag Filter */}
        <TagFilter
          availableTags={allTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClear={clearFilters}
        />

        {/* Selected Tags Display */}
        {selectedTags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map(tag => {
                const tagDef = TAG_DEFINITIONS[tag.toLowerCase()] || { color: 'bg-gray-400' };
                return (
                  <span
                    key={tag}
                    className={`${tagDef.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}
                  >
                    {tag}
                    <button
                      onClick={() => handleTagToggle(tag)}
                      className="hover:bg-black hover:bg-opacity-20 rounded-full p-1"
                    >
                      <X size={12} />
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Showing {filteredMovies.length} of {movies.length} movies
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map(movie => (
            <Moviecard
              key={movie.id}
              title={movie.title}
              imageUrl={movie.imageUrl}
              tags={movie.tags}
              onTagClick={handleTagClick}
            />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No movies found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>
      </div>
    ); 
};

export default MovieList
