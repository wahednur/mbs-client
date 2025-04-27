import PropTypes from "prop-types";
import React from "react";

const Button = ({ title, className, btnType }) => {
  return <button className={`btn ${btnType} ${className}`}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;
