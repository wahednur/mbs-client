import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const DashSiteTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Dashboard</title>{" "}
    </Helmet>
  );
};

DashSiteTitle.propTypes = {
  title: PropTypes.string,
};

export default DashSiteTitle;
