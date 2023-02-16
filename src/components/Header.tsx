import React from 'react';
import '../styles/header.css';

interface HeaderProps {
  primary?: boolean;
  title: string;
  label: string;
  backgroundColor?: string;
}


export const Header = ({
  primary = false,
  title,
  label,
  backgroundColor,
  ...props
}: HeaderProps) => {
  const mode = primary ? 'header--global' : `header--${label}`;
  return (
    <header style={{backgroundColor}}>
    <div className={['header', mode].join(' ')}>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {primary ? (
          <>
            <span className="info-text">
              <b>{new Date().toLocaleDateString()}</b>
              <b>{new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</b>
            </span>
          </>
        ) : (
          <>
            <button className="button-placeholder">Action</button>
          </>
        )}
      </div>
    </div>
  </header> 
  );
};