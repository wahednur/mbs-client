import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkBtn = ({ link, title, className, btnType }) => {
  return (
    <Link to={`/${link}`} className={`btn ${btnType} ${className}`}>
      {title}
    </Link>
  );
};

LinkBtn.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LinkBtn;
