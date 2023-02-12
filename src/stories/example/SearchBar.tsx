import React from 'react';
import './searchbar.css';

interface SearchBarProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}


export const SearchBar = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: SearchBarProps) => {
  const mode = primary ? 'storybook-searchbar--outlined' : 'storybook-searchbar--contained';
  return (
	<h1>
	  <input type="text" 
	  className={['storybook-searchbar', `storybook-searchbar`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
	  placeholder={label} 
	  />
	</h1>
  );
};