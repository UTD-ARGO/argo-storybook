import React from 'react';
import './searchbar.css';
import './global.css';

interface SearchBarProps {
  variant?: 'outlined' | 'contained' | 'underlined';
  disabled: boolean;
  label: string;
  onClick?: () => void;
}


export const SearchBar = ({
  variant,
  disabled = false,
  label,
  ...props
}: SearchBarProps) => {
  const mode = `searchbar--${variant}`
  return (
	<h1>
	  <input type="text" 
	  className={['searchbar', mode].join(' ')}
      {...props}
	  placeholder={label}
	  disabled = {disabled}
	  />
	</h1>
  );
};