import React from 'react';
import PropTypes from 'prop-types';


const Display = ({ expression, result }) => {
    return (
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="result">{result}</div>
      </div>
    );
  };


  Display.propTypes = {
    expression: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  };
  

export default Display;