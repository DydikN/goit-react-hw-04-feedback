import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul className={styles.list}>
          <li>
            <p className={styles.item}>Good: {good}</p>
          </li>
          <li>
            <p className={styles.item}>Neutral: {neutral}</p>
          </li>
          <li>
            <p className={styles.item}>Bad: {bad}</p>
          </li>
          <li>
            <p className={styles.item}>Total: {total}</p>
          </li>
          <li>
            <p className={styles.item}>
              Positive feedback: {positivePercentage}%
            </p>
          </li>
        </ul>
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
