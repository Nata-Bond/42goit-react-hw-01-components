import React from "react";
import StatisticsItem from "./StatisticsItem";
import PropTypes from "prop-types";
import { Section } from "./statisticStyled";
import rundomColor from "../../rundomColor";

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((el) => {
          return (
            <StatisticsItem
              rColor={rundomColor}
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>
    </Section>
  );
};

Statistics.defaultProps = {
  title: "Statistics",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
