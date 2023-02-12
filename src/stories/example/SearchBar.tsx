import React from 'react';
import './searchbar.css';

interface SearchBarProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * SearchBar contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
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
	  className={['storybook-searchbox', `storybook-searchbar`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
	  placeholder={label} 
	  />
	</h1>
  );
};