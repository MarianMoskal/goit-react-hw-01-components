import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function StatCard({ label, percentage }) {
  return (
    <>
      <li className={s.item}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
    </>
  );
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatCard;
