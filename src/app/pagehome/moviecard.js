import React, { useState } from 'react';

// Import or define TAG_DEFINITIONS (you'll need this in your moviecard file)
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
  'just plain bad' : { color: 'bg-red-800', category: 'status'},
  'painfully bad' : { color: 'bg-red-950', category: 'status'}
};

const Moviecard = ({ id, title, imageUrl, tags, onTagClick }) => {


  return (
    <div className="movie-card">
      <div className="card-content">
        <button className="card-image">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title}
              onError={(e) => {
                e.target.src = '';
              }}
            />
          )}
        </button>
        <h2 className="card-title font-semibold text-gray-500">{title}</h2>
        
        {/* Updated tags section */}
        <div className="card-tags flex flex-wrap gap-1 mt-2">
          {Array.isArray(tags) ? (
            // Handle array of tags (new format)
            tags.map((tag, index) => {
              const tagDef = TAG_DEFINITIONS[tag.toLowerCase()] || { color: 'bg-gray-400', category: 'other' };
              return (
                <span
                  key={index}
                  onClick={() => onTagClick && onTagClick(tag)}
                  className={`${tagDef.color} text-white px-2 py-1 rounded-full text-xs font-medium ${
                    onTagClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
                  }`}
                >
                  {tag}
                </span>
              );
            })
          ) : (
            // Handle string of tags (old format for backwards compatibility)
            <p className="text-xs text-gray-200">{tags}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Moviecard;