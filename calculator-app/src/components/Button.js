/*\ eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';



const Button = ({ children, handleClick }) => {
    return (
      <button className="button" onClick={handleClick}>
        {children}
      </button>
    );
  };

  Button.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
  };


export default Button;