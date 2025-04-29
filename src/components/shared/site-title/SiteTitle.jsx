import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";

const SiteTitle = ({ title }) => {
  return <Helmet>{title} | WS Building Management System</Helmet>;
};

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteTitle;
