import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <div className="relative w-full max-w-md mr-auto">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-border bg-background text-copy-secondary"
      />
      <span className="absolute top-3 right-1 px-3 bg-background"><FaSearch color="rgba(var(--copy-secondary))" size={25}/></span>
    </div>
  );
};

export default SearchBar;
