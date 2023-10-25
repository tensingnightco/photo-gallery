// src/components/SearchBar.tsx

import React from 'react';
import TextField from '@mui/material/TextField';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <TextField
      fullWidth
      label="Search for Images"
      variant="outlined"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
