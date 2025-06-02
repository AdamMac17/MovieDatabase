import React, {useState} from 'react';

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

const TagFilter = ({ availableTags, selectedTags, onTagToggle, onClear }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Group tags by category
    const tagsByCategory = {};
    availableTags.forEach(tag => {
      const tagDef = TAG_DEFINITIONS[tag.toLowerCase()] || { category: 'other' };
      if (!tagsByCategory[tagDef.category]) {
        tagsByCategory[tagDef.category] = [];
      }
      tagsByCategory[tagDef.category].push(tag);
    })};

export default TagFilter;