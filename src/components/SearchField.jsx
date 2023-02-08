import React from 'react';
import PropTypes from 'prop-types';
import './searchfield.css'

export default function SearchField({label, placeholder, fieldType, onChange}) {
  return (
    <div className="list-item" >
      <label htmlFor="title" aria-label={label}>
        
        <input type="text" placeholder={placeholder} readOnly={false} name="title"
            className={['input', `input--${fieldType}`].join(' ')}
        />
      </label>
    </div>
  );
}

SearchField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    fieldType: PropTypes.oneOf(['default', 'hover', 'focus']),
    onChange: PropTypes.func,
}

SearchField.defaultProps = {
    label: "Default",
    placeholder: "Search",
    fieldType: "default",
    onChange: PropTypes.func,
};