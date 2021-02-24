import React from "react";
import PropTypes from "prop-types";
import { Item } from "./statisticStyled";

const StatisticsItem = ({ label, percentage, rColor }) => {
  return (
    <Item className="item" rColor={rColor}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </Item>
  );
};

StatisticsItem.defaultProps = {
  label: "jreg",
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
