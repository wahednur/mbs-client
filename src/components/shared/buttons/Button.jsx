import PropTypes from "prop-types";
import React from "react";

const Button = ({ title, className, btnType, submit, clickEvent }) => {
  return (
    <button
      onClick={clickEvent}
      type={submit}
      className={`btn ${btnType} ${className}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;
