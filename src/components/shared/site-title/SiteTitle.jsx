import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const SiteTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | WS Building Management System</title>
    </Helmet>
  );
};

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteTitle;
